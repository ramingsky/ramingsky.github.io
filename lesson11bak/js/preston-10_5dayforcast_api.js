const apiURLF = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=dbbc85924da6238f183ab3c7e13fc06d";
fetch(apiURLF)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        var wDay = 0;
        var imgCount =0;
        var tempCount=0;
        for(var i= 0;i<jsObject.list.length;i++){
            var dateTime = jsObject.list[i].dt_txt;
            var time = dateTime.includes("18:00:00");
            if(time == true){
                wDay++;
                imgCount++
                tempCount++
                var dayOfWeek = (new Date(dateTime).toLocaleString('en-us',{weekday: 'long'}));
                document.getElementById('D'+wDay).textContent = dayOfWeek;
                var imagesrc= 'https://openweathermap.org/img/wn/'+ jsObject.list[i].weather[0].icon+ '@2x'+'.png';
                var desc=  jsObject.list[i].weather[0].description;
                document.getElementById('I'+imgCount).setAttribute('src', imagesrc);
                document.getElementById('I'+imgCount).setAttribute('alt',desc);
                var temp = Math.round(jsObject.list[i].main.temp_max );
                document.getElementById("d"+tempCount+'T').textContent = temp  ;
            }else{
                continue;
            }
        }
       
    });
    
