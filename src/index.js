import './styles.css';
import './todoController.js';
import render from './renderTodoList.js';
import { setTodoListToLocalStorage, Todo } from './todo.js';
// import { Priority } from './priority.js';
import { Priority } from './priority.js';
render()

let list = []
let todo1 = new Todo("todo 1", "2025-01-20", "2025-01-03", Priority.HIGH.value)
let todo2 = new Todo("todo 2", "2025-01-02", "2025-01-03", Priority.MEDIUM.value)
let todo3 = new Todo("todo 3", "2025-01-02", "2025-01-03", Priority.HIGH.value)
let todo4 = new Todo("todo 4", "2025-01-20", "2025-01-30", Priority.DONE.value)
let todo5 = new Todo("todo 4", "2025-01-20", "2025-01-30", Priority.HIGH.value)
let todo6 = new Todo("todo 4", "2025-01-20", "2025-01-30", Priority.MEDIUM.value)
let todo7 = new Todo("todo 4", "2025-01-20", "2025-01-30", Priority.DONE.value)
let todo8 = new Todo("todo 4", "2025-01-20", "2025-01-30", Priority.HIGH.value)
let todo9 = new Todo("todo 4", "2025-01-20", "2025-01-30", Priority.HIGH.value)
let todo11 = new Todo("todo 4", "2025-01-20", "2025-01-30", Priority.MEDIUM.value)
let todo12 = new Todo("todo 4", "2025-01-20", "2025-01-30", Priority.HIGH.value)
let todo13 = new Todo("todo 4", "2025-01-20", "2025-01-30", Priority.MEDIUM.value)
let todo14 = new Todo("todo 4", "2025-01-20", "2025-01-30", Priority.HIGH.value)
let todo15 = new Todo("todo 4", "2025-01-20", "2025-01-30", Priority.MEDIUM.value)

list.push(todo1.transform(), todo2.transform(), todo3.transform(), todo4.transform(), todo5.transform(),
    todo6.transform(), todo7.transform(), todo8.transform(), todo9.transform(), todo11.transform(), todo12.transform(), todo13.transform(), todo14.transform(), todo15.transform()
)

// setTodoListToLocalStorage(list)
//add sort 

if (localStorage.getItem('sortCondition') === null) {
    const sortCondition = {
        title: true,
        addedDate: true,
        deadline: true,
        priority: true
    }
    localStorage.setItem('sortCondition', JSON.stringify(sortCondition))
}


let b = Object.values(Priority)
let o = b.find((x) => x.value === "LOW").key

console.log(o);
