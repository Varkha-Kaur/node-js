//Import Events
const EventEmitter = require('events');

//Intialization of EventEmitter
let eventemitter = new EventEmitter();

// Register to ZA event
eventemitter.on('ZAEvent',(msg)=>{
    console.log(msg)
})

//triggering  of my event
eventemitter.emit('ZAEvent','This is my First Event');