const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?zip=83287,us&units=imperial&APPID=f7d7618a1ee4178c8cbd23e4094b697c"

fetch(forecastURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {

        const forecast = jsonObject['list']
        let num = 0;
        for (let i = 0; i < forecast.length; i++) {

            if (jsonObject.list[i].dt_txt.includes("18:00:00")) {
                const list = (jsonObject.list[i].main.temp.toFixed(0));
                num++;
                temp = "temp" + num;
                document.getElementById(temp).textContent = list;


                const imagesrc = 'https://openweathermap.org/img/w/' + jsonObject.list[i].weather[0].icon + '.png';
                const desc = jsonObject.list[i].weather[0].description;
                icon = "icon" + num;
                document.getElementById(icon).setAttribute('src', imagesrc);
                document.getElementById(icon).setAttribute('alt', desc);


                var d = new Date(jsonObject.list[i].dt_txt);
                var weekday = new Array(7);
                weekday[0] = "Sun";
                weekday[1] = "Mon";
                weekday[2] = "Tue";
                weekday[3] = "Wed";
                weekday[4] = "Thu";
                weekday[5] = "Fri";
                weekday[6] = "Sat";

                var n = weekday[d.getDay()];
                weekdays = "wkday" + num;
                document.getElementById(weekdays).textContent = n;


                console.log(weekdays);

            }
        }
    });
