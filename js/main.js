let searchInput = document.querySelector(".search");
let findBtn = document.querySelector(".find");

async function getResponse (){
    let response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=453de000543443f99ae93459231208&q=cairo&days=3&aqi=no&alerts=no`)
    let responseData = await response.json();
    console.log(responseData);
    let data = responseData;
    displayCurrent(data);
    console.log(data);
}
getResponse();

function displayCurrent(weather){
    let cityWeather = `<div class="col-md-4 col-sm-12 top-first-sec ">
    <div class="d-flex justify-content-between p-2 ">
        <p>Saturday</p>
        <p>6January</p>
    </div>
</div>
<div class="col-md-4  col-sm-12 top-second-sec">
    <div class="text-center p-2 ">
        <p>sunday</p>
    </div>
</div>
<div class="col-md-4  col-sm-12 top-third-sec">
    <div class="text-center p-2 ">
        <p>monday</p>
    </div>
</div>

</div>

<div class="col-md-4 col-sm-12 bottom-first-sec ">
    <div class="weather-card mt-">
        <p class="fs-4 location">${weather.location.name}</p>
        <p class="text-white degree">${weather.forecast.forecastday[0].day.maxtemp_c}&deg;C </p>
        <img src="${weather.forecast.forecastday[0].day.condition.icon}" class="  text-white " alt="weather-photo" />
        <span class="d-block text-info description mb-3 mt-3">${weather.forecast.forecastday[0].day.condition.text}</span>
        <div class="details d-flex justify-content-between">
            <div class="location d-flex ">
                <i class="me-2 fa-solid fa-umbrella"></i>
                <span class="me-3">${weather.forecast.forecastday[0].day.daily_chance_of_rain}%</span>
            </div>
            <div class="location d-flex ">
                <i class="me-2 fa-solid fa-wind"></i>
                <span class="me-3">${weather.forecast.forecastday[0].day.maxwind_kph}km/h</span>
            </div>
            <div class="location d-flex ">
                <i class="me-2 fa-solid fa-compass"></i>
                <p class="me-3">East</p>
            </div>
            </div>
        </div>
    </div>
</div>
<div class="col-md-4 col-sm-12 d-flex flex-column align-items-center justify-content-center bottom-second-sec text-center">
<div class="box text-center day2">
        <div class="weather-card text-white">
            <img class="  mb-2" src="${weather.forecast.forecastday[1].day.condition.icon}" alt="weather-photo" />
            <p class="max-degree fw-bold fs-3 text-white">${weather.forecast.forecastday[1].day.maxtemp_c}&deg;C</p>
            <p class="min-degree ">${weather.forecast.forecastday[1].day.mintemp_c}&deg;C</p>
            <span class=" text-info description">${weather.forecast.forecastday[1].day.condition.text}</span>
        </div>
    </div>
</div>
<div class="col-md-4 col-sm-12 bottom-third-sec  d-flex flex-column align-items-center justify-content-center bottom-second-sec text-center">
    
        <div class="weather-card text-white">
            <img class="  mb-2" src="${weather.forecast.forecastday[2].day.condition.icon}" alt="weather-photo" />
            <p class="max-degree fw-bold fs-3 text-white">${weather.forecast.forecastday[2].day.maxtemp_c}&deg;C</p>
            <p class="min-degree ">${weather.forecast.forecastday[2].day.mintemp_c}&deg;C</p>
            <span class=" text-info description">${weather.forecast.forecastday[2].day.condition.text}</span>
        </div>
    </div>
</div>`

document.querySelector(".row").innerHTML = cityWeather ;
}

async function search (nameOfCity){
    let searchResponse = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=453de000543443f99ae93459231208&q=${nameOfCity}&days=3&aqi=no&alerts=no`)
    let result = await searchResponse.json();
    displayCurrent(result);
}

findBtn.addEventListener("click" , function(){
    let cityName = searchInput.value;
    search(cityName);
} )


