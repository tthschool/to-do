import { eventsHub } from "./eventsHub"
import { Priority } from "./priority"
const contentDiv = document.querySelector('#content')
export default function render (){
    renderUp()
    renderDown()
}
function renderUp () {
    const todoList = localStorage.getItem('todolist') ? JSON.parse(localStorage.getItem('todolist')) : []
  
    const contentUp = customCreateElement({tag : "div" ,width : "700px", height : "300px", display : "flex" ,border : "1px gray solid", flexDirection : "column" , gap : "10px", overflowX : "auto" , padding : "10px",paddingTop : "0px", marginBottom : "10px"})
    const taskHead = customCreateElement({tag : "div" , innerHTML : "task"})
    const addedDateHead = customCreateElement({tag : "div" , innerHTML : "added date"})
    const deadlineDateHead = customCreateElement({tag : "div" , innerHTML : "deadline"})
    const priorityHead = customCreateElement({tag : "div" , innerHTML : "priority"})
    const deleteBtnHead = customCreateElement({tag : "div" })
    const saveBtnHead = customCreateElement({tag : "div" })
    const todoDiv = customCreateElement({position : "sticky", top:"0" , zIndex : "100", tag : "div",backgroundColor: "gray" ,display : "grid" , gridTemplateColumns : "3fr 2fr 2fr 2fr 1fr 1fr" ,gridTemplateRows : "30px" , padding : "3px" , gap : "3px"  })
    const headList = [taskHead, addedDateHead, deadlineDateHead, priorityHead]
    headList.forEach(head => {
        head.addEventListener('click' , () => sort(head))
    })
    todoDiv.appendChild(taskHead)
    todoDiv.appendChild(addedDateHead)
    todoDiv.appendChild(deadlineDateHead)
    todoDiv.appendChild(priorityHead)
    todoDiv.appendChild(deleteBtnHead)
    todoDiv.appendChild(saveBtnHead)
    contentUp.appendChild(todoDiv)
    todoList.forEach(todo => {
        const todoDiv = customCreateElement({tag : "div" ,display : "grid" , gridTemplateColumns : "3fr 2fr 2fr 2fr 1fr 1fr" , backgroundColor : priorityColor(todo.priority)  ,gridTemplateRows : "30px" , padding : "3px" , gap : "3px"  , alignItems : "stretch"})
        const task = customCreateElement({tag : "input" , value : todo.title ,type : "text", id :`task${todo.id}`})
        const addedDate = customCreateElement({tag : "input" , value : todo.addedDate , type : "date" , id :`addedDate${todo.id}`})
        const deadlineDate = customCreateElement({tag : "input" , value : todo.deadlineDate, type : "date" , id : `deadlineDate${todo.id}`})
        const priority = customCreateElement({tag : "input" , value : todo.priority, type :"text" , id : `priority${todo.id}`})
        const deleteBtn = customCreateElement({tag : "button" , innerHTML : "done"})
        deleteBtn.addEventListener('click' , () =>  todoDeleted(todo.id))
        todoDiv.appendChild(task)
        todoDiv.appendChild(addedDate)
        todoDiv.appendChild(deadlineDate)
        todoDiv.appendChild(priority)
        todoDiv.appendChild(deleteBtn)
        const saveBtn = customCreateElement({tag : "button" , innerHTML: "save"})
        saveBtn.addEventListener('click' , () =>  saveData({ id : todo.id , task : task.value , addedDate : addedDate.value , deadlineDate : deadlineDate.value , priority : priority.value}))

        todoDiv.appendChild(saveBtn)

        contentUp.appendChild(todoDiv)
    })
    contentDiv.appendChild(contentUp)
}

function renderDown(){
    const contentDown = customCreateElement({tag : "div" ,width : "700px" , height : "30px" , display : "flex" , justifyItems: "center", justifyContent: "center" })
    const task = customCreateElement({tag : "input" , placeholder : "task",type : "text", id : "task-input"})
    const addedDate = customCreateElement({tag : "input" , type : "date" , id : "addedDate-input"})
    const deadlineDate = customCreateElement({tag : "input" , type : "date" , id : "deadlineDate-input"})
    const priority = customCreateElement({tag : "input" , placeholder : "task", type :"text" , id : "priority-input"})
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

function todoDeleted(id){
    eventsHub.publish('todoDeleted' , id)
}
function saveData(data) {
    console.log(data);
}

function priorityColor(priority) {
    if (priority == Priority.HIGH) {
        return "red"
    }
    if (priority === Priority.MEDIUM) {
        return "#bb41e0"
    }
}

function sort(e) {
    console.log(e);
    
}