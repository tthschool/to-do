
import { eventsHub } from "./eventsHub.js";

// add 
eventsHub.subscribe('todoAdded' , (todo) => {
    console.log("added")
})

// subtract
eventsHub.subscribe('todoSubtracted' , (todo) => {
    console.log("todoSubtracted")
})

//sort

eventsHub.subscribe('todosorted' , (todo) => {
    console.log("sorted")
})


// delete 
eventsHub.subscribe('todoDeleted', (id) => {
    console.log("delete" + id);
    
})