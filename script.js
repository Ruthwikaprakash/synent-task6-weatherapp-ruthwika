const searchBtn = document.getElementById("searchBtn");
const weatherResult = document.getElementById("weatherResult");

searchBtn.addEventListener("click", () => {

    const city = document.getElementById("cityInput").value;

    weatherResult.innerHTML = `
        <h2>${city}</h2>
        <p>Weather data will appear here.</p>
    `;
});
