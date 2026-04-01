const readingFile = fs.readFile(filePath , "utf-8" , (err , data) => {
    if(err) console.error(err);
    else console.log(data);
})
