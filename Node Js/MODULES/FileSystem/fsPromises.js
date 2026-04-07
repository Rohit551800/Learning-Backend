const path = require("path");
const fs = require("fs/promises")


const dirName = __dirname;
const fileName = "promisesData.txt";
const filePath = path.join(dirName , fileName);
console.log(dirName);
//Reading directory

// const readDir = fs.readdir(dirName)
//     .then((data) => console.table(data))
//     .catch((err) => console.log(err));


//CRUD Operations using Promises module

// const writeFile = fs.writeFile(filePath , "Hii i am currently writing the file" , "utf-8")
//     .then(() => console.log("File write successfully"))
//     .catch((err) => console.log(err));


// const readFile = fs.readFile(filePath , "utf-8")
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));


// const appendFile = fs.appendFile(filePath , "\nHii i am currently appending the file" , "utf-8")
//     .then(() => console.log("File append successfully"))
//     .catch((err) => console.log(err));


const deleteFile = fs.unlink(filePath)
    .then(() => console.log("File deleted successfully"))
    .catch((err) => console.log(err));