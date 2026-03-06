import express from "express";
import { getWeather } from "../api/weatherapp.js";

const router = express.Router();

// Define a GET endpoint that accepts a city parameter in the URL
router.get("/:city", async(req, res)=>{
    try{
        // Call the weather API function using the city from request parameters
        const data = await getWeather(req.params.city)
        res.json(data);
    } catch (error){
        res.status(500).json({error: "Failed to fetch weather"});
    }
})

// Export the router so it can be used in the main server file
export default router;