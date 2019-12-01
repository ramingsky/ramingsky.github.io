const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == 'Preston') {
                let card = document.createElement('section');
                let h3 = document.createElement('h3');
                let line = document.createElement('hr');
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                let p3 = document.createElement('p');

                h3.textContent = "Upcoming Events";
                p1.textContent = towns[i].events[0];
                p2.textContent = towns[i].events[1];
                p3.textContent = towns[i].events[2];

                card.appendChild(h3);
                card.appendChild(line);
                card.appendChild(p1);
                card.appendChild(p2);
                card.appendChild(p3);

                document.querySelector('#pres-events').appendChild(card);
            }
        }
    });