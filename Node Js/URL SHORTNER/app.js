import { createServer } from 'http';
import path from 'path';
import  crypto from 'crypto';
import fs from 'fs/promises'

const PORT = 3001;
const DATA_FILE = path.join("data" , "links.json");

const serveFile = async (res, filepath, contentType) => {
    try {
        const data = await fs.readFile(filepath);
        res.writeHead(200, {
            'Content-Type': contentType
        });
        res.end(data);
    }
    catch (error) {
        res.writeHead(404, {
            'Content-Type': contentType
        });
        res.end('404 Page Not Found');
    }
}

const loadLinks = async () => {
    try{
        const data = await fs.readFile(DATA_FILE , 'utf-8');
        return JSON.parse(data);
    }
    catch(error){
        if(error.code === "ENOENT"){
            await fs.writeFile(DATA_FILE , JSON.stringify({}));
            return {};
        }

        throw error;
    }
}


const saveLinks = async (links) => {
    await fs.writeFile(DATA_FILE , JSON.stringify(links));
}
const server = createServer(async (req, res) => {
    // console.log(req.url)
    if (req.method === 'GET') {
        if (req.url === "/") {
            return serveFile(res, path.join("public", "index.html"), "text/html");
        }
        else if (req.url === "/style.css") {
            return serveFile(res,path.join("public", "style.css"), "text/css");
        }
    }
    if(req.method === 'POST'){
        const links = await loadLinks();
        if(req.url === '/shorten'){
            let body = '';
            req.on('data' , (chunks) => {
                body += chunks;
            });
            req.on('end' , async ()=> {
                const {url , shortCode} = JSON.parse(body);

                if(!url){
                    res.writeHead(400 , {"Content-Type" : "text/plain"});
                    return res.end("URL is required");
                }

                const finalShortCode = shortCode || crypto.randomBytes(4).toString('hex');
                // To check duplicate data
                if(links[finalShortCode]){
                    res.writeHead(400 , {"content-type" : "text/Plain"});
                    return res.end("Shortened Code already exist");
                }

                links[finalShortCode] = url;
                await saveLinks(links);

                 res.writeHead(200 , {"content-type" : "application/json"});
                 res.end(JSON.stringify({success : true , shortCode : finalShortCode }));
            });
        }
    }
})


server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});