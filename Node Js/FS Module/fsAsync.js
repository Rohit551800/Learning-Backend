const path = require("path");
const fs = require("fs");


const fileName = "AsyncFile.txt";
const filePath = path.join(__dirname , fileName);


// const writeFile = fs.writeFile(filePath , "Rohit Singh Gouria Writing file" , "utf-8" , (err) =>{
//     if(err) console.error(err);
//     else console.log("File write successfully");
// });


// const readingFile = fs.readFile(filePath , "utf-8" , (err , data) => {
//     if(err) console.error(err);
//     else console.log(data);
// })


// const appendFile = fs.appendFile(filePath , "Rohit Singh Gouria Appending File " , "utf-8" , (err) =>{
//     if(err) console.error(err);
//     else console.log("Append File successfully");
// })



const newFilePath = path.join(__dirname, "renameAsync.txt")
// const renameFile = fs.rename(filePath , newFilePath, (err) =>{
//     if(err) console.error(err);
//     else console.log("Rename file successfully");
// });


const unlinkFile = fs.unlink(newFilePath , (err) => {
    if(err) console.error(err);
    else console.log("File deleted successfully");
})