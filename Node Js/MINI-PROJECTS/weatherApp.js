import chalk from 'chalk';
import { response } from 'express';
import https from 'https';
import readline from 'readline';


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


//Using fetch api
const getWeather = async (city) => {
    const apiKey = 'd779d68ab4d0ac851893cb60b0c6c2d7';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(chalk.black.bgRed("Please check city name!!!!!"));
        }

        const weatherData = await response.json();
        console.log("\n Weather Information");
        console.table({
            City: weatherData.name,
            Temperature: `${(weatherData.main.temp - 273.15).toFixed(2)} °C`,
            Description: weatherData.weather[0].description,
            Humidity: `${weatherData.main.humidity}%`,
            WindSpeed: `${weatherData.wind.speed} m/s`
        });
    }
    catch (error) {
        console.log(error);
    }

};


const city = await rl.question("Enter city name :", (city) => {
    getWeather(city);
    rl.close();
});

//Method using https



// rl.question("Enter your city name :", (city) => {
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;


//     https.get(url, (response) => {
//         let data = '';

//         response.on('data', (chunks) => {
//             data += chunks;
//         });

//         response.on('end', () => {
//             const details = JSON.parse(data);
//             console.log(details);
//             rl.question("Enter the city name :", (city) => {
//             });
//             rl.close();
//         });

//         response.on('err', (err) => {
//             console.log(err);
//         });

//     });
// });