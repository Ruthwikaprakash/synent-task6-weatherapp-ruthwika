const apiKey = "1fbac49080719e7f5332521e038915b7";

const searchBtn = document.getElementById("searchBtn");
const weatherResult = document.getElementById("weatherResult");

searchBtn.addEventListener("click", getWeather);

async function getWeather() {

    const city = document.getElementById("cityInput").value;

    const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    console.log(url);

    try {

        const response = await fetch(url);

        console.log(response);

        const data = await response.json();

        console.log(data);

const icon = data.weather[0].icon;

weatherResult.innerHTML = `
    <h2>${data.name}</h2>

    <img
        src="https://openweathermap.org/img/wn/${icon}@2x.png"
        alt="Weather Icon"
    >

    <h3>${data.main.temp}°C</h3>

    <p>${data.weather[0].description}</p>

    <p>Humidity: ${data.main.humidity}%</p>

    <p>Wind Speed: ${data.wind.speed} m/s</p>

    <p>Feels Like: ${data.main.feels_like}°C</p>
`;
    } catch (error) {

        console.log(error);

        weatherResult.innerHTML =
            "<p>Failed to fetch weather data.</p>";
    }
}