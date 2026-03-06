async function getWeather() {
    const city = document.getElementById("city").value.trim();

    if(!city) return ;

    try{
        const response = await fetch(`https://simple-weather-app-vtqb.onrender.com/weather/${city}`);
        const data = await response.json();

        if(!response.ok){ 
            showError("City Not found");
            return ;
        }

        clearError();

        document.querySelector("#temp .stat-value").textContent =
            data.main.temp + "°C";

        document.querySelector("#condition .stat-value").textContent =
            data.weather[0].main;

        document.querySelector("#humidity .stat-value").textContent =
            data.main.humidity + "%";
    } catch(error){
            showError("Something went Wrong. Check your connection");
    }
}

function showError(message) {
    let el = document.getElementById("error-msg");
    if (!el) {
        el = document.createElement("p");
        el.id = "error-msg";
        el.style.cssText = `
            color: #f87171;
            font-size: 0.85rem;
            margin-top: -16px;
            margin-bottom: 8px;
            padding: 10px 14px;
            background: rgba(248, 113, 113, 0.08);
            border: 1px solid rgba(248, 113, 113, 0.2);
            border-radius: 10px;
        `;
        document.querySelector(".search-row").insertAdjacentElement("afterend", el);
    }
    el.textContent = message;
}

function clearError() {
    document.getElementById("error-msg")?.remove();
}