// File System by synhronous method

const fs = require("fs");
const path = require("path");

const fileName = "data.txt";
const fileaPath = path.join(__dirname , fileName);


//Creating file / Writing File 
// const writeFile = fs.writeFileSync(fileaPath , "This is intial commit " , "utf-8");

//Reading File
// const readFile = fs.readFileSync(fileaPath , "utf-8");
// console.log(readFile);


//Append File /Update File

// const appendFile = fs.appendFileSync(fileaPath , "\n Rohit Singh Gouria updated the file data");


//deleting the file or unlink the file

// const unlinkFile = fs.unlinkSync(fileaPath);


//Renaming the file

const newFileName = "newFile.txt";
const newFilePath = path.join(__dirname , newFileName);

const renameFile = fs.renameSync(fileaPath , newFilePath);