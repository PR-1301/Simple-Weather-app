import express from "express";
import { getWeather } from "../api/weatherapp.js";

const router = express.Router();

router.get("/:city", async(req, res)=>{
    try{
        const data = await getWeather(req.params.city)
        res.json(data);
    } catch (error){
        res.status(500).json({error: "Failed to fetch weather"});
    }
})

export default router;