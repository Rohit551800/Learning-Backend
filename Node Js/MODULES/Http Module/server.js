const http = require("http");
const PORT = 3000;



const server = http.createServer((req , res) => {
    if(req.url === "/"){
        res.setHeader("Content-Type" , "text/HTML");
        res.write("<h1>Welcme to home page</h1>");
        res.end();
    }
    else if(req.url === "/source"){
        res.write("Welcome to Source code page");
        res.end();
    }
    else if(req.url === "/contact"){
        res.setHeader("Content-Type" , "text/plain");
        res.write("Welcome to contact page");
        res.end();
    }

});




server.listen(PORT , () => {
    console.log(`Listening on PORT http://localhost:${PORT}`);
});