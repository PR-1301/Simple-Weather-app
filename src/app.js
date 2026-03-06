import weatherRoutes from "../src/routes/weather.js"
import path from "path"

import express from "express"
const app = express()

//Load the frontend
app.use(express.static("public"));

//call the function
app.use("/weather", weatherRoutes);

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log("Server running on port", PORT);
    console.log(`http://localhost:${PORT}`);
})
