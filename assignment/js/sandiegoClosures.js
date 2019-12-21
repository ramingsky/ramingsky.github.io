const requestJson = 'https://ramingsky.github.io/assignment/temples.json';

fetch(requestJson)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.log(jsonObject);

        const temples = jsonObject['temples'];
        for (let i = 0; i < temples.length; i++) {

            document.getElementById('sandiego-closures').innerHTML += temples[3].closures[i] + "<br>";
        }
    })