const currentURL = "https://api.openweathermap.org/data/2.5/weather?zip=83287,us&units=imperial&APPID=dbbc85924da6238f183ab3c7e13fc06d";


fetch(currentURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        const tempF = jsObject.main.temp;
        const wSpeed = jsObject.wind.speed;
        const windChill = getWindChill(tempF, wSpeed);

        document.getElementById('current-cond').textContent = jsObject.weather[0].description;
        document.getElementById('humidity').textContent = Math.floor(jsObject.main.humidity);
        document.getElementById('temperature').textContent = Math.floor(jsObject.main.temp);
        document.getElementById('windspeed').textContent = Math.floor(jsObject.wind.speed);
        document.getElementById('chill').textContent = windChill.toFixed(0);

    });