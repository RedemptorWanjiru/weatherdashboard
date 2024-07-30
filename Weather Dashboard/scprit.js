const apiKey = '725290fb094e3fa00b1de3abd2b636e1';  
document.getElementById('search-button').addEventListener('click', () => {
    const city = document.getElementById('search-bar').value;
    if (city) {
        getCurrentWeather(city);
        getForecast(city);
    }
});

async function getCurrentWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();

    document.getElementById('city-name').textContent = data.name;
    document.getElementById('date-time').textContent = new Date().toLocaleString();
    document.getElementById('temperature').textContent = `Temperature: ${data.main.temp} °C`;
    document.getElementById('weather-description').textContent = `Description: ${data.weather[0].description}`;
    document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
    document.getElementById('wind-speed').textContent = `Wind Speed: ${data.wind.speed} m/s`;
    document.getElementById('weather-icon').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
}

async function getForecast(city) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();

    const forecastContainer = document.getElementById('forecast-container');
    forecastContainer.innerHTML = '';

    data.list.forEach((item, index) => {
        if (index % 8 === 0) {  // Filter to get one forecast per day
            const forecastItem = document.createElement('div');
            forecastItem.classList.add('forecast-item');
            forecastItem.innerHTML = `
                <p>${new Date(item.dt_txt).toLocaleDateString()}</p>
                <img src="http://openweathermap.org/img/wn/${item.weather[0].icon}.png" alt="Weather Icon">
                <p>${item.main.temp} °C</p>
                <p>${item.weather[0].description}</p>
            `;
            forecastContainer.appendChild(forecastItem);
        }
    });
}
