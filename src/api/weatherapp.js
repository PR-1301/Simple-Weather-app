import {api_Key, BASE_URL} from "../config.js"
import axios from "axios";

export async function getWeather(city) {
    try{
        const response = await axios.get(`${BASE_URL}/weather?q=${city}&appid=${api_Key}&units=metric`)
        return response.data;
    }catch (error){
        throw error;
    }
}