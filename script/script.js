const form = document.querySelector('.display');
const input = document.querySelector('.searchCityInput');
const button = document.querySelector('.submitButton');
const displayCity = document.querySelector('.targetCity');
const displayIcon = document.querySelector('.weatherIcon');
const displayTemp = document.querySelector('.cityTempreature');
let cityName = '';

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = form.children[1].value;
    
    if(data.length > 0) {
        const city = e.target[0].value;
        getCityCode(city)
            .then(e => {
                cityName = e[0].LocalizedName;
                return getCityWeather(e[0]);
            })
            .then(e => {
                const temp = e[0].Temperature.Metric.Value;

                displayCity.innerText = cityName;
                displayIcon.setAttribute('src', `imgs/icons/${e[0].WeatherIcon}.svg`);
                displayTemp.innerText = `${temp}°C`;
            })
            .catch(err => {
                console.log(err);
            })
    }
});

