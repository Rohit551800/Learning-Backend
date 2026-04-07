const EventEmitter = require("events");


const emitter = new EventEmitter();


// Basic Method (emit , on)

// emitter.on("greet" , ()=>{
//     console.log("Hello World");
// })
// emitter.emit("greet");


// Events using arguments

// emitter.on("greet" , (user)=>{
//     console.log(`Hello ${user}`);
// })
// emitter.emit("greet" , "Rohit Singh Gouria");


//Passing argument as a object

emitter.on("greet" , (user)=>{
    console.log(`Hello ${user.name} !!\nAre you ${user.age} years old ??!! \nAre you in ${user.Branch} branch??`);
})
emitter.emit("greet" ,{ name : "Rohit Singh Gouria" , age : 21 , Branch : "Computer Science"});

