const os = require("os");

console.log("Platform " , os.platform);
console.table(os.userInfo);
console.log("Cpu Architecture" , os.arch);
console.log("Free memory" ,os.freemem);
console.log("Total memory" ,os.totalmem);
console.log("system uptime" , os.uptime);
console.log("operating system" , os.cpus);
console.log("home directory" , os.homedir);