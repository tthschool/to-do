import { eventsHub } from "./eventsHub"
import { Priority } from "./priority.js"
import { getTodoList } from "./todo"
const contentDiv = document.querySelector('#content')
export default function render (){
    document.querySelector('#content').innerHTML = ""
    renderUp()
    renderDown()
}
function renderUp () {
    const todoList = getTodoList()
  
    const contentUp = customCreateElement({tag : "div" , height : "300px", display : "flex" ,border : "1px gray solid",borderTop: "0px", flexDirection : "column" , gap : "10px", overflowX : "auto",padding : "5px",paddingTop : "0px", marginBottom : "10px"})
    const titleHead = customCreateElement({tag : "div" , innerHTML : "title"})
    const addedDateHead = customCreateElement({tag : "div" , innerHTML : "addedDate"})
    const deadlineDateHead = customCreateElement({tag : "div" , innerHTML : "deadlineDate"})
    const priorityHead = customCreateElement({tag : "div" , innerHTML : "priority"})
    const todoDiv = customCreateElement({position : "sticky", top:"0" , zIndex : "100", tag : "div",backgroundColor: "gray" ,display : "grid" , gridTemplateColumns : "3fr 2fr 2fr 2fr 1fr 1fr 1fr" ,gridTemplateRows : "30px" , padding : "3px" , gap : "3px"  })
    
    const headList = [titleHead, addedDateHead, deadlineDateHead, priorityHead]
    headList.forEach(head => {
        head.addEventListener('click' , () => sort(head))
    })
    todoDiv.appendChild(titleHead)
    todoDiv.appendChild(addedDateHead)
    todoDiv.appendChild(deadlineDateHead)
    todoDiv.appendChild(priorityHead)
    contentUp.appendChild(todoDiv)
    todoList.forEach(todo => {
   
        const todoDiv = customCreateElement({tag : "div" ,display : "grid" , gridTemplateColumns : "3fr 2fr 2fr 2fr 1fr 1fr 1fr" , backgroundColor : priorityColor(todo.priority)  ,gridTemplateRows : "30px" , padding : "3px" , gap : "3px"  , alignItems : "stretch"})
        // if (todo.priority === Priority.DONE) {
        //     const lineDiv = customCreateElement({tag : "div" , width : "112px" , height : "47px" , borderBottom : "1px solid black" , position : "absolute"})
        //     todoDiv.appendChild(lineDiv)
        // }
        const title = customCreateElement({tag : "input" , value : todo.title ,type : "text", id :`title${todo.id}`})
        const addedDate = customCreateElement({tag : "input" , value : todo.addedDate , type : "date" , id :`addedDate${todo.id}`})
        const deadlineDate = customCreateElement({tag : "input" , value : todo.deadlineDate, type : "date" , id : `deadlineDate${todo.id}`})
        const priority = customCreateElement({tag : "select" , id : todo.id })
        const listPriority =  [Priority.HIGH.value , Priority.MEDIUM.value, Priority.LOW.value , Priority.DONE.value]
        listPriority.forEach(p => {
            const option = customCreateElement({tag : "option" , value : p , innerHTML : p})
            priority.appendChild(option)
        })
        priority.value = todo.priority
        // done
        const doneBtn = customCreateElement({tag : "button" , innerHTML : "done"})
        doneBtn.addEventListener('click' , () =>  todoDone(todo.id))
        //delete
        const deleteBtn = customCreateElement({tag : "button" , innerHTML : "delete"})
        deleteBtn.addEventListener('click' , () => deleteTodo(todo.id))
        // save 
        const updateBtn = customCreateElement({tag : "button" , innerHTML: "update"})
        updateBtn.addEventListener('click' , () =>  updateTodo({ id : todo.id , title : title.value , addedDate : addedDate.value , deadlineDate : deadlineDate.value , priority : priority.value}))

        todoDiv.appendChild(title)
        todoDiv.appendChild(addedDate)
        todoDiv.appendChild(deadlineDate)
        todoDiv.appendChild(priority)
        todoDiv.appendChild(doneBtn)
        
        todoDiv.appendChild(updateBtn)
        todoDiv.appendChild(deleteBtn)
        contentUp.appendChild(todoDiv)
    })
    contentDiv.appendChild(contentUp)
}

function renderDown(){
    const contentDown = customCreateElement({tag : "div" ,width : "700px" , height : "30px" , display : "flex" , justifyItems: "center", justifyContent: "center" })
    const task = customCreateElement({tag : "input" , placeholder : "task",type : "text", id : "task-input"})
    const addedDate = customCreateElement({tag : "input" , type : "date" , id : "addedDate-input"})
    const deadlineDate = customCreateElement({tag : "input" , type : "date" , id : "deadlineDate-input"})


    const priority = customCreateElement({tag : "select" , id : "priority-input"})

    const listPriority =  [Priority.HIGH.value , Priority.MEDIUM.value , Priority.LOW.value, Priority.DONE.value]
    listPriority.forEach(p => {
        const option = customCreateElement({tag : "option" , value : p , innerHTML : p})
        priority.appendChild(option)
    })
    const saveBtn = customCreateElement({tag : "button" , innerHTML: "save"})
    saveBtn.addEventListener('createTask' , () => createTask({task : task , addedDate : addedDate , deadlineDate : deadlineDate , priority : priority}))
    contentDown.appendChild(task)
    contentDown.appendChild(addedDate)
    contentDown.appendChild(deadlineDate)
    contentDown.appendChild(priority)
    contentDown.appendChild(saveBtn)
    contentDiv.appendChild(contentDown)
}
function customCreateElement(element) {
    const el = document.createElement(element.tag)
    
    for (const key in element) {
        if (key === 'tag') {
            continue
        }
        if (el.style[key] !== undefined) {
            el.style[key] = element[key] 
        } else {
            el[key] = element[key]
        }
    }
    return el
}

function updateTodo(data) {
    eventsHub.publish('updateTodo' , data)
}

function sort(e) {
    eventsHub.publish('sortTodo' , e.innerHTML)    
}

function todoDone(id) {
    eventsHub.publish('totoDone' , id)
}

function deleteTodo(id) {
    eventsHub.publish('deleteTodo' , id)
}

function priorityColor(priority) {
    switch (priority) {
        case Priority.HIGH.value:
            return "#f8d7da";
        case Priority.MEDIUM.value:
            return "#fff3cd";
        case Priority.LOW.value:
            return "#d4edda";
        case Priority.DONE.value:
            return "#d1ecf1";
        default:
            return "#ffffff"; 
    }
}
