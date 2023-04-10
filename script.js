let city = document.getElementById('city');
let search = document.getElementById('search');

let weather = document.getElementById('weatherOf');
let Feels_like = document.getElementById('feels_like');
let Humidity = document.getElementById('humidity');
let Humidity2 = document.getElementById('humidity2');
let Max_temp = document.getElementById('max_temp');
let Min_temp = document.getElementById('min_temp');
let Sunrise = document.getElementById('sunrise');
let Sunset = document.getElementById('sunset');
let Temp = document.getElementById('temp');
let Temp2 = document.getElementById('temp2');
let Wind_degrees = document.getElementById('wind_degrees');
let Wind_speed = document.getElementById('wind_speed');
let Wind_speed2 = document.getElementById('wind_speed2');


let updateCity;

search.addEventListener('click', function(e){
    e.preventDefault();
    updateCity = city.value.charAt(0).toUpperCase() + city.value.slice(1);
    getWeather(updateCity);
})

function getWeather(cityFor) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '10d397c7bfmshb9cb56724f26b8ap1052eajsn630dc7607448',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    weather.innerHTML = cityFor;

    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${cityFor}`, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            Feels_like.innerHTML = response.feels_like
            Humidity.innerHTML = response.humidity
            Humidity2.innerHTML = response.humidity
            Max_temp.innerHTML = response.max_temp
            Min_temp.innerHTML = response.min_temp
            Sunrise.innerHTML = response.sunrise
            Sunset.innerHTML = response.sunset
            Temp.innerHTML = response.temp
            Temp2.innerHTML = response.temp
            Wind_degrees.innerHTML = response.wind_degrees
            Wind_speed.innerHTML = response.wind_speed
            Wind_speed2.innerHTML = response.wind_speed
        })
        .catch(err => console.error(err));
}

getWeather('Arunachal Pradesh');


function getLucknowWeather(cityFor) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '10d397c7bfmshb9cb56724f26b8ap1052eajsn630dc7607448',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${cityFor}`, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            Feels_likeTd1.innerHTML = response.feels_like
            HumidityTd1.innerHTML = response.humidity
            Max_tempTd1.innerHTML = response.max_temp
            Min_tempTd1.innerHTML = response.min_temp
            SunriseTd1.innerHTML = response.sunrise
            SunsetTd1.innerHTML = response.sunset
            TempTd1.innerHTML = response.temp
            Wind_degreesTd1.innerHTML = response.wind_degrees
            Wind_speedTd1.innerHTML = response.wind_speed
        })
        .catch(err => console.error(err));
}

getLucknowWeather('Lucknow')

function getPunjabWeather(cityFor) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '10d397c7bfmshb9cb56724f26b8ap1052eajsn630dc7607448',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${cityFor}`, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            Feels_likeTd2.innerHTML = response.feels_like
            HumidityTd2.innerHTML = response.humidity
            Max_tempTd2.innerHTML = response.max_temp
            Min_tempTd2.innerHTML = response.min_temp
            SunriseTd2.innerHTML = response.sunrise
            SunsetTd2.innerHTML = response.sunset
            TempTd2.innerHTML = response.temp
            Wind_degreesTd2.innerHTML = response.wind_degrees
            Wind_speedTd2.innerHTML = response.wind_speed
        })
        .catch(err => console.error(err));
}

getPunjabWeather('Punjab')


function getLudhianaWeather(cityFor) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '10d397c7bfmshb9cb56724f26b8ap1052eajsn630dc7607448',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${cityFor}`, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            Feels_likeTd3.innerHTML = response.feels_like
            HumidityTd3.innerHTML = response.humidity
            Max_tempTd3.innerHTML = response.max_temp
            Min_tempTd3.innerHTML = response.min_temp
            SunriseTd3.innerHTML = response.sunrise
            SunsetTd3.innerHTML = response.sunset
            TempTd3.innerHTML = response.temp
            Wind_degreesTd3.innerHTML = response.wind_degrees
            Wind_speedTd3.innerHTML = response.wind_speed
        })
        .catch(err => console.error(err));
}

getLudhianaWeather('Ludhiana');
