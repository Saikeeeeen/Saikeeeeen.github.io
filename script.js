const apiKey = 'b6c3cb93d6b044559cd20254240312 '; 
const city = 'Davao';

function callAPI() {
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.querySelector("#weather_city").textContent = data.location.name || 'N/A';
            document.querySelector("#weather_temperature").textContent = `${data.current.temp_c}°C` || 'N/A';
            document.querySelector("#weather_condition").textContent = data.current.condition.text || 'N/A';
        })
        .catch(error => console.error('Error fetching weather data:', error));
}