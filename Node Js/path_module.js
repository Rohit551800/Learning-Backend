const path = require("path");

console.log(__dirname);
console.log(__filename);

const filePath = path.join("folder" , "student" , "data.txt");
// console.log(filePath);


const resolvedPath = path.resolve(filePath);
const extName = path.extname(filePath);
const dirName = path.dirname(filePath);
const baseName = path.basename(filePath);
const parseData = path.parse(filePath);

console.table(parseData);
console.table({resolvedPath , extName , dirName , baseName});