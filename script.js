function getWeather() {
    let city = document.getElementById('search').value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7e67d543bde7d566fed08cdb1307f38b&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            let temperature = Math.round(data.main.temp);
            let description = data.weather[0].description;
            let humidity = data.main.humidity;
            let pressure = data.main.pressure;
            let windSpeed = data.wind.speed;

            document.getElementById('weather').innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <h3>${temperature}°C</h3>
                <p>${description}</p>
                <p>Humidity: ${humidity}%</p>
                <p>Pressure: ${pressure}hPa</p>
                <p>Wind Speed: ${windSpeed}m/s</p>
            `;
        })
        .catch(error => {
            console.log('Error:', error);
            document.getElementById('weather').innerHTML = `
                <h2>Error</h2>
                <p>City not found.</p>
            `;
        });
}