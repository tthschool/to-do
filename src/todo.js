class Todo {
    constructor(title, addedDate , deadlineDate, priority) {
        this._title = title
        this._addedDate = addedDate
        this._deadlineDate = deadlineDate 
        this._priority = priority
        Object.defineProperty(this , '_id' , {
            value : crypto.randomUUID()
        })
    }
    get id(){
        return this._id
    }
    get title(){
        return this._title
    }
    get addedDate(){
        return this._addedDate
    }
    get deadlineDate(){
        return this._deadlineDate
    }
    get priority(){
        return this._priority
    }
    set title(value) {
        this._title = value
    }
    set addedDate(value) {
        this._addedDate = value
    }
    set deadlineDate(value){
        this._deadlineDate = value
    }
    set priority(value) {
        this._priority = value
    }
  
    transform(){
        return {
            "id" : this.id,
            "title" : this.title,
            "addedDate" : this.addedDate,
            "deadlineDate" : this.deadlineDate,
            "priority" : this.priority
        }
    }
}

export {Todo}