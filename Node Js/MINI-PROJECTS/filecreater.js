import fs from 'fs';
import path from 'path';
import readline from 'readline';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rl = readline.createInterface({
    input:process.stdin ,
    output:process.stdout
});
const fileCreation = () => {
    rl.question("Enter the file name " , (fileName) => {
        rl.question("Enter the content for your file :" , (content) => {

            const filepath = path.join(__dirname , `${fileName}.txt`);
            fs.writeFile(filepath , content , (err) => {
                if(err){
                    console.error("File creation unsuccessful" , err);
                }
                else{
                    console.log(`File ${fileName} created successfully`);
                }
                rl.close();
            })
        });
    });
}
fileCreation();