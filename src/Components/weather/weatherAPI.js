import axios from "axios";

const API_open_weather = "38700d4014436cf333fe875864f261fc";

export const loadWeather = (lat, lon) => {

  currentWeather(lat, lon)
    .then((response) => {
      const data = {
        temp : response.temp,

      }
    })
};

function currentWeather(lat, lon) {
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_open_weather}`;

  return axios
    .get(URL)
    .then(function (response) {
      const data = response.data.weather;
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
}

function getIcon(code) {
  return axios
  .get(`https://openweathermap.org/img/wn/${code}@2x.png`)
}

const phagwara = {
  lat: 31.2436,
  lon: 75.703835,
};

// loadWeather(phagwara.lat, phagwara.lon);
