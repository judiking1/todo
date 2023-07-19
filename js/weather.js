const API_KEY= "f16c846a936fd49a973c1d8907b2b63d";

const weatherIcon = document.querySelector("#weather img");
weatherIcon.src = `./images/icons/unknown.png`;
const weather = document.querySelector("#weather p");
const city = document.querySelector("#weather span");

function onGeoOk(position){
   const lat = position.coords.latitude;
   const lon = position.coords.longitude;
   console.log(lat, lon);
   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
   fetch(url).then((response) => response.json()).then((data)=>{
    // console.log(data);
    city.innerText = data.sys.country +" / "+ data.name;
    let icon = data.weather[0].icon;
    weatherIcon.src = `./images/icons/${icon}.png`;
    let temp = data.main.temp;
    let num = parseFloat(temp).toFixed(1);
    weather.innerText= `${data.weather[0].main} / ${num} ℃`;

   });
}
function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError, {enableHighAccuracy: true, maximumAge: 30000, timeout: 27000 });