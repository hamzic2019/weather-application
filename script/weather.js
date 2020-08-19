const apiKey = 'miWGR9IGJiXS9wjaFAunXaPRah4snCSR';
// Usually apiKay has to be hidden, but this one I let be public, because it has limit to the max 50 calls a day!


const getCityCode = async (city) => {
    const url = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${city}`;
    const code = await fetch(url);
    return code.json();
};

const getCityWeather = async (key) => {
    const url = `http://dataservice.accuweather.com/currentconditions/v1/${key.Key}?apikey=${apiKey}`;
    const weatherData = await fetch(url);
    return weatherData.json();
}