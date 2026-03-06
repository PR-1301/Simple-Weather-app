import { getWeather } from "../src/api/weatherapp.js"

import express from "express"
const app = express()


async function fetchWeather(city){
    const data = await getWeather(city);
    console.log(data.main.temp);
    console.log(data.weather[0].main);
    console.log(data.main.humidity);
}

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log("Server running on port", PORT);
    console.log(`http://localhost:${PORT}`);
})
