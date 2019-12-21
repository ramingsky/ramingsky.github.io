const requestJson = 'https://ramingsky.github.io/assignment/temples.json';

fetch(requestJson)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
            console.log(jsonObject);

            const temples = jsonObject['temples'];
            for (let i = 0; i < temples.length; i++) {
                         
            document.getElementById('jordan-closures').innerHTML += temples[0].closures[i] + "<br>";
        }
    })