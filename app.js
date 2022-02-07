//Event Driven Prog.
//on - listen for an event
//emit -emit an event

const EventEmitter =require('events')

const customEmitter=new EventEmitter()

customEmitter.on('response',()=>{
    console.log('data received')
})
customEmitter.emit('response') //Synchronously calls each of the listeners registered for the event 'response', in the order they were registered, passing the supplied arguments to each.
//run log : data received