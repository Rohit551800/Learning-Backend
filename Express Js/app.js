import { config } from 'dotenv';
import express from 'express';
import path from 'path';


const app = express();
config();

const staticPath = path.join(import.meta.dirname , "public");
app.use("/public" , express.static("public"));

const PORT = process.env.PORT;


app.get("/" , (req , res)=> {
    res.sendFile(filePathName);
})
app.get("/:profile" , (req , res) => {
    res.send(`Hello ${req.params.profile}`);
})
app.get("/:profile/article/:slug" , (req , res) => {
    const formatdata = req.params.slug.replace(/-/g , " ");
    res.send(`Hello ${req.params.profile} here is the slug : ${formatdata}`);
})

// app.get("/" , (req , res)=> {
//     // console.log(import.meta.dirname);
//     const filename = new URL(import.meta.filename).pathname;
//     console.log(filename);

//     const filePathName = path.join(import.meta.dirname , "public" , "index.html");
//     res.sendFile(filePathName);
// })

app.listen(PORT , ()=> {
    console.log(`Server is running on http://localhost:${PORT}`);
})