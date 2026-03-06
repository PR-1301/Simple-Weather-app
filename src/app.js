import weatherRoutes from "../src/routes/weather.js"

import express from "express"
const app = express()

// This allows HTML, CSS, and JS files inside /public to be accessed in the browser
app.use(express.static("public"));

// Any request starting with /weather will be handled by weatherRoutes
app.use("/weather", weatherRoutes);

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log("Server running on port", PORT);
    console.log(`http://localhost:${PORT}`);
})
