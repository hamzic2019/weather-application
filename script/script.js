const form = document.querySelector('.display');
const input = document.querySelector('.searchCityInput');
const button = document.querySelector('.submitButton');
const displayCity = document.querySelector('.targetCity');
const displayIcon = document.querySelector('.weatherIcon');
const displayTemp = document.querySelector('.cityTempreature');
const forcast = new Forcast();

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = form.children[1].value;
    
    if(data.length > 0) {        
        forcast.displayUI(e.target[0].value)
            .then(e => {
                displayCity.innerText = e.cityName;
                displayIcon.setAttribute('src', `imgs/icons/${e.icon}.svg`);
                displayTemp.innerText = `${e.temp}°C`;
            })
            .catch(err => {

            })
    }

});

