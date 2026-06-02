import readline from "readline";
import https from "https";
import chalk from "chalk";

const apiKey = '612a655bb027c3ac785199cc';
const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});


const convertCurrency = (amount , rate) => {
    return (amount * rate).toFixed(2);
}
https.get(url , (response) => {
    let data = '';
    response.on(  'data' , (chunk)=> {
        data += chunk;
    });

    response.on('end' , ()=> {
        const rates = JSON.parse(data).conversion_rates;


        rl.question("Enter the amount of USD : ", (amount) => {
            rl.question("Enter the currency code (eg. INR , NPR , EUR) :", (currencyCode) => {
                  const rate = rates[currencyCode.toUpperCase()];
                  if(rate){
                    console.log(`${amount} USD is approximately ${convertCurrency(amount , rate)} ${currencyCode}`);
                  }
                  else{
                    console.log(chalk.red.bgRed(`Invalid currency code `));
                  }
            });
        });
        console.log(chalk.blue.bgRed())
    })
});