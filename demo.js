const  apiKey ="58973b677ee7f6817cbbce2bee6cb3f1";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const search=document.querySelector(".input-bar input");
const searchbtn=document.querySelector(".input-bar button");
const weathericon=document.querySelector(".weather-icon");
async function checkweather(city){
    const response =await fetch(apiUrl+city+`&appid=${apiKey}`);
    var data =await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/hr";
    if(data.weather[0].main=="Clouds"){
        weathericon.src="images/clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        weathericon.src="images/Clear.png";

    }
    else if(data.weather[0].main=="Mist"){
        weathericon.src="images/mist.png";

    }
    else if(data.weather[0].main=="Rain"){
        weathericon.src="images/rain.png";

    }
    else if(data.weather[0].main=="Drizzle"){
        weathericon.src="images/drizzle.png";

    } 
}
searchbtn.addEventListener("click",()=>{
    checkweather(search.value);
})
checkweather();