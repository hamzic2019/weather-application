const getCityCode = async (city) => {
    const url = `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${city}`;
    const code = await fetch(url);
    return code.json();
};

const getCityWeather = async (key) => {
    const url = `https://dataservice.accuweather.com/currentconditions/v1/${key.Key}?apikey=${apiKey}`;
    const weatherData = await fetch(url);
    return weatherData.json();
}