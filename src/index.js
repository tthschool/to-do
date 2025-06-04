import './styles.css';
import { eventsHub } from './eventsHub.js';
import './todoController.js';
import render from './renderTodoList.js';
import { Todo } from './todo.js';
import { Priority } from './priority.js';
render()

let list = []
let todo1 = new Todo("todo 1" , "2025-01-20" , "2025-01-03" , Priority.HIGH)
let todo2 = new Todo("todo 2" , "2025-01-02" , "2025-01-03" , Priority.MEDIUM)
let todo3 = new Todo("todo 3" , "2025-01-02" , "2025-01-03" , Priority.HIGH)
let todo4 = new Todo("todo 4" , "2025-01-20" , "2025-01-30" , Priority.HIGH)
let todo5 = new Todo("todo 4" , "2025-01-20" , "2025-01-30" , Priority.HIGH)
let todo6 = new Todo("todo 4" , "2025-01-20" , "2025-01-30" , Priority.MEDIUM)
let todo7 = new Todo("todo 4" , "2025-01-20" , "2025-01-30" , Priority.MEDIUM)
let todo8 = new Todo("todo 4" , "2025-01-20" , "2025-01-30" , Priority.HIGH)
let todo9 = new Todo("todo 4" , "2025-01-20" , "2025-01-30" , Priority.HIGH)
let todo11 = new Todo("todo 4" , "2025-01-20" , "2025-01-30" , Priority.MEDIUM)
let todo12 = new Todo("todo 4" , "2025-01-20" , "2025-01-30" , Priority.HIGH)
let todo13 = new Todo("todo 4" , "2025-01-20" , "2025-01-30" , Priority.MEDIUM)
let todo14 = new Todo("todo 4" , "2025-01-20" , "2025-01-30" , Priority.HIGH)
let todo15 = new Todo("todo 4" , "2025-01-20" , "2025-01-30" , Priority.MEDIUM)
let todo16 = new Todo("todo 4" , "2025-01-20" , "2025-01-30" , Priority.HIGH)
let todo17 = new Todo("todo 4" , "2025-01-20" , "2025-01-30" , Priority.HIGH)
let todo18 = new Todo("todo 4" , "2025-01-20" , "2025-01-30" , Priority.HIGH)

list.push(todo1.transform()  , todo2.transform() , todo3.transform(), todo4.transform(), todo5.transform(),
todo6.transform(),todo7.transform(),todo8.transform(),todo9.transform(),todo11.transform() , todo12.transform() , todo13.transform(), todo14.transform() ,todo15.transform()
)
localStorage.setItem('todolist' , JSON.stringify(list))