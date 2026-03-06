async function getWeather() {
    const city = document.getElementById("city").value;

    const response = await fetch(`http://localhost:3000/weather/${city}`);
    const data = await response.json();

    document.querySelector("#temp .stat-value").textContent =
        data.main.temp + "°C";

    document.querySelector("#condition .stat-value").textContent =
        data.weather[0].main;

    document.querySelector("#humidity .stat-value").textContent =
        data.main.humidity + "%";
}