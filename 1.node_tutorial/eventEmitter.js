//Event Driven Prog.
//on - listen for an event
//emit -emit an event

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it

const EventEmitter =require('events')
// if want custom extend from class
// otherwise just for emitting and handling events create instance
const customEmitter=new EventEmitter()

customEmitter.on('response',(name,id)=>{
    console.log(`data received user ${name} with id: ${id}`)
})

//customEmitter.emit('response') //Synchronously calls each of the listeners registered for the event 'response', in the order they were registered, passing the supplied arguments to each.
//run log : data received

customEmitter.on('response',()=>{
    console.log('some other logic here')
})
customEmitter.emit('response','sebnem',99) 


