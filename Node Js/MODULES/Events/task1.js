const EventEmitter = require("events");

const emitter = new EventEmitter();

const countObj = {
    "user-login" : 0,
    "user-purchased" : 0,
    "profile-updated" : 0,
    "user-logout" : 0
}
emitter.on("user-login" , (user) => {
    countObj["user-login"]++
    console.log(`${user} login successfully`);
})
emitter.on("user-purchase" , (user , item) => {
    countObj["user-purchased"]++;
    console.log(`${user} purchased ${item}`);
})
emitter.on("profile-update" , (user , field) => {
    countObj["profile-updated"]++;
    console.log(`${user} updated his ${field}`);
})
emitter.on("user-logout" , (user) => {
    countObj["user-logout"]++;
    console.log(`${user} logout successfully`);
})
emitter.on("summary" , (countObj) =>{
    console.table(countObj);
});
emitter.emit("user-login" , 'Rohit Singh');
emitter.emit("user-purchase" , "Rohit Singh" , "Laptop");
emitter.emit("profile-update" , "Rohit Singh" , "email");
emitter.emit("user-logout" , "Rohit Singh");
emitter.emit("summary" , countObj);