const eventsHub = {
    events : {},
    publish(event, data){
        if (this.events[event]) {
            this.events[event].forEach(fn => fn(data));
        }
    },
    subscribe(event, fn){
        this.events[event] = this.events[event] || []
        this.events[event].push(fn)
    }
}
export {eventsHub}