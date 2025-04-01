const apikey = "d4088ad71a662dccaaed2d1889ae4de6";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const cityName = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".Weather-icon");

async function checkWeather(cityName){
    const response = await fetch(apiurl+`&appid=${apikey}&q=${cityName}`);
    var data = await response.json();

    document.querySelector(".city-name").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+" °C";
    document.querySelector(".humidity-value").innerHTML = data.main.humidity+"%";
    document.querySelector(".wind-speed-value").innerHTML = data.wind.speed+" km/h";

    

    console.log(data);
    if(data.weather[0].main == "Clear"){
       weatherIcon.src="weather-app-img/images/clear.png" 
    }else if(data.weather[0].main == "Clouds"){
        weatherIcon.src="weather-app-img/images/clouds.png"
    }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src="weather-app-img/images/drizzle.png"
    }else if(data.weather[0].main == "Mist"){
        weatherIcon.src="weather-app-img/images/mist.png"
    }else if(data.weather[0].main == "Rain"){
        weatherIcon.src="weather-app-img/images/rain.png"
    }else if(data.weather[0].main == "Snow"){
        weatherIcon.src="weather-app-img/images/snow.png"
    }
}

searchBtn.addEventListener("click",function(){
    checkWeather(cityName.value);
})