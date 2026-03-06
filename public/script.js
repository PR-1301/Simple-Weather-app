async function getWeather() {

    const city = document.getElementById("city").value;

    const response = await fetch(`http://localhost:3000/weather/${city}`);
    const data = await response.json();

    document.getElementById("temp").textContent =
        "Temperature: " + data.main.temp + "°C";

    document.getElementById("condition").textContent =
        "Condition: " + data.weather[0].main;

    document.getElementById("humidity").textContent =
        "Humidity: " + data.main.humidity + "%";
}