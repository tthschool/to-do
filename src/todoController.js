
import { eventsHub } from "./eventsHub.js";
import { Priority } from "./priority.js";
import render from "./renderTodoList.js";
import { getSortCondition, getTodoList, setSortCondition, setTodoListToLocalStorage, Todo } from "./todo.js";


eventsHub.subscribe('updateTodo', (data) => {
    
    let todoList = getTodoList()
    const found = todoList.find(todo => todo.id === data.id);
    found.title = data.title 
    found.addedDate = data.addedDate
    found.deadlineDate = data.deadlineDate
    found.priority = data.priority
    
    setTodoListToLocalStorage(todoList)
})

eventsHub.subscribe('sortTodo', (data) => {
    switch (data) {
        case "title":
            sortData(data , "text")
            break;
        case "addedDate":
            sortData(data , "date")
            break;
        case "deadlineDate":
            sortData(data , "date")
            break
        case "priority":
            sortData(data , "priority")
            break
    }
        
})
eventsHub.subscribe('totoDone', (data) => {
    let todolist = getTodoList()
    let todo = todolist.find((t) => t.id === data)
    todo.priority = Priority.DONE.value
    setTodoListToLocalStorage(todolist)
    render()
    
})

eventsHub.subscribe('deleteTodo', (data) => {
    let todolist  = getTodoList()
    todolist = todolist.filter(t => t.id !== data)
    setTodoListToLocalStorage(todolist)
    render()
})

function sortData(data , tag) {
    let todoList = getTodoList()
    let sortCondition = getSortCondition()
    
    if (tag === "text") {
        if (sortCondition[data]) {
            todoList.sort((a, b) => a[data].localeCompare(b[data]))
        } else {
            todoList.sort((a, b) => b[data].localeCompare(a[data]))
        }
    }
    if (tag === "date") {
        if (sortCondition[data]) {
            todoList.sort((a, b ) => new Date(a[data]) - new Date(b[data])) 
        } else {
            todoList.sort((a, b ) => new Date(b[data]) - new Date(a[data])) 
        }
    }
    if (tag === "priority") {
        let arrayPriority = Object.values(Priority)
        if (sortCondition[data]) {
            todoList.sort((a,b) => (arrayPriority.find(x => x.value === a.priority).key) - (arrayPriority.find(x => x.value === b.priority).key) )
        } else {
            todoList.sort((a,b) => (arrayPriority.find(x => x.value === b.priority).key) - (arrayPriority.find(x => x.value === a.priority).key) )
        }
    }
    sortCondition[data] = !sortCondition[data]
    setSortCondition(sortCondition)
    setTodoListToLocalStorage(todoList)
    render()

}

eventsHub.subscribe('createTask' , (data) => {
    let todolist = getTodoList()

    let todo = new Todo(data.task , data.addedDate , data.deadlineDate , data.priority)
    todolist.push(todo.transform())
    setTodoListToLocalStorage(todolist)
    render()
})