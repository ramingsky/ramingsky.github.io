
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //storing the results of the grabbed array
        const prophets = jsonObject['prophets'];
        //looping through each prophet, for the cards
        for (let i = 0; i < prophets.length; i++) {
            //making each element: section,h2,p,p,image
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let image = document.createElement('img');
            //adding content to each card
            h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
            p1.textContent = 'Date of Birth: ' + prophets[i].birthdate;
            p2.textContent = 'Place of Birth: ' + prophets[i].birthplace;
            image.setAttribute('src', prophets[i].imageurl);
            image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + ' ' + prophets[i].order);
            card.appendChild(h2);
            card.appendChild(p1);
            card.appendChild(p2);
            card.appendChild(image);
            document.querySelector('div.cards').appendChild(card);
        }
    });

