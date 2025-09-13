//f6371a3cbf26fa4216c0e29c06d83600

const date = document.getElementById('date');
const city = document.getElementById('city');
const temp = document.getElementById('temp');
const tempImg = document.getElementById('tempImg');
const description = document.getElementById('description');
const tempMax = document.getElementById('tempMax');
const tempMin = document.getElementById('tempMin');
const preLoader = document.querySelector("#preLoader");


const months = ["January", "Februauy", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"]

let dateObj =  new Date();
let month = months[dateObj.getUTCMonth()];
let day = dateObj.getUTCDate() -1;
let year = dateObj.getUTCFullYear();


date.innerHTML = `${month} ${day} ${year}`;


const app = document.getElementById('app');

const getWeather = async () =>{
    try{
        const cityName = document.getElementById('searchBarInput').value;
        preLoader.style.display="block";
        const weatherDateFetch = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=38aec60398a1dc0fb7af05a5e93df230&units=metric`,
            {
            Headers:{
                Accept: "application/json"
            }
        });

        const weatherData = await weatherDateFetch.json();
        preLoader.style.display="none";
        console.log(weatherData)
        city.innerHTML = `${weatherData.name}`;
        description.innerHTML = `${weatherData.weather[0].main}`;
        tempImg.innerHTML = `<img src="http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png">`;
        temp.innerHTML = `<h2>${Math.round(weatherData.main.temp)}</h2>`;
        tempMax.innerHTML = `${weatherData.main.temp_max}°C`;
        tempMin.innerHTML = `${weatherData.main.temp_min}°C`;


    }
    catch(error){
        console.log(error)
    }
}

