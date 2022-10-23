export const WEATHER_DATA_RECEIVED = "WEATHER_DATA_RECEIVED";
const baseUrl = "https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/cities";

export const weatherDataReceived = (weatherData) => {
    return {
        type: WEATHER_DATA_RECEIVED,
        payload: weatherData,
    };
};

export const getWeatherData = () => {
    return function(dispatch) {
        fetch(baseUrl)
            .then((responsee) => responsee.json())
            .then((weatherData) => dispatch(weatherDataReceived(weatherData)));
    };
};