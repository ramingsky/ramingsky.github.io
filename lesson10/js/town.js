const requestURL ="https://byui-cit230.github.io/weather/data/towndata.json";
fetch(requestURL)
    .then(function (response){
        return response.json();
    })
    .then(function(jsonObject){
        console.table(jsonObject);
        const towns = jsonObject['towns'];
        for(let i=0; i<towns.length; i++){
          if(towns[i].name ==="Fish Haven" || towns[i].name ==="Preston" || towns[i].name === "Soda Springs"){  
          let card = document.createElement('section');
          let h2 = document.createElement('h2');
          let motto = document.createElement('h4');
          let year = document.createElement('p');
          let pop = document.createElement('p');
          let averageR = document.createElement('p');
          let img = document.createElement('img'); 
          let text = document.createElement('div');
          h2.textContent= towns[i].name;
          motto.textContent = towns[i].motto;
          year.textContent = "Year Founded: " + towns[i].yearFounded;
          pop.textContent ="Current Population: " + towns[i].currentPopulation;
          averageR.textContent ="Average Rainfall: " + towns[i].averageRainfall;
          img.setAttribute('src','images/'+towns[i].photo);
          img.setAttribute('alt',towns[i].name + " image");
          text.appendChild(h2);
          text.appendChild(motto);
          text.appendChild(year);
          text.appendChild(pop);
          text.appendChild(averageR);
          card.appendChild(text);
          card.appendChild(img);
          document.querySelector('div.cards').appendChild(card);
          }else{continue}
        }
    });