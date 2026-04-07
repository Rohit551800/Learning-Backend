const path = require("path");
const fs = require("fs/promises");


const dirName = __dirname;
const fileName = "promisesData.txt";
const filePath = path.join(dirName , fileName);
console.log(dirName);


//Reading directory

// const readDir = async () => {
//     try {
//        const res = await fs.readdir(dirName);
//         console.table(res);
//     } catch (error) {
//         console.log(error)
//     }

// }
// readDir();

//CRUD Operations using Promises module

// const writeFile = async () => {
//     try {
//         await fs.writeFile(filePath , "Hii i am currently writing the file" , "utf-8");
//         console.log("File write successfully")
//     } catch (error) {
//         console.log(err)
//     }
// } 



// writeFile();


// const readFile = async () => {
//     try {
//         const res = await fs.readFile(filePath , "utf-8");
//         console.log(res)
//     } catch (error) {
//         console.log(error);
//     }
// }



// readFile();

// const appendFile = async() => {
//     try {
//         await fs.appendFile(filePath , "\nHii i am currently appending the file" , "utf-8");
//         console.log("File append successfully")    
//     } catch (error) {
//         console.log(error);
//     }
// }



// appendFile();

// const deleteFile = async () => {
//     try {
//         fs.unlink(filePath);
//         console.log("File deleted successfully");
//     } catch (error) {
//         console.log(error)
//     }
// }

// deleteFile();