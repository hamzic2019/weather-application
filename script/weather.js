class Forcast {
    constructor(){
        this.apiKey = 'hGXxbS57NBhYV9Keuph0xuQAzR9s3hqj';
    }

    async displayUI(city){
        const data = await this.getCityCode(city);
        const weather = await this.getCityWeather(data[0]);
        return {
            cityName: data[0].LocalizedName,
            temp: weather[0].Temperature.Metric.Value,
            icon: weather[0].WeatherIcon
        }
    }

    async getCityCode(city) {
        const url = `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${this.apiKey}&q=${city}`;
        const code = await fetch(url);
        return code.json();
    }

    async getCityWeather(key) {
        const url = `https://dataservice.accuweather.com/currentconditions/v1/${key.Key}?apikey=${this.apiKey}`;
        const weatherData = await fetch(url);
        return weatherData.json();
    }
}

