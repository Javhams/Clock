const COORDS = "coords";
const API_KEY =  "3a9cc07ac6b3b4cf3adb8941f7c09b41";
const weatherContainer = document.getElementById('weather');
const temperatureContainer = document.getElementById('temperature');


function getWeather(lat, lon) {
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(API_URL)
        .then(res => res.json())
        .then(json => {
            const temperature = ((json.main.temp * 9/5 + 32) * 0.1).toFixed(1);
            const place = json.name;
            const weather = json.weather[0].main;
        weatherContainer.innerHTML = `${weather}, ${temperature}&#176F`;
        temperatureContainer.innerHTML =`${place}`;
        })
        .catch(err => res.send('Location Not Found'));
    
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coords = {
        latitude,
        longitude
    }
    saveCoords(coords);
};

function handleGeoError() {
    console.log("Can't access your location");
}

function askForCoords() {
    window.navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError, {timeout:5000});
}


function getCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null) {
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}


function init() {
    getCoords();
}

init()