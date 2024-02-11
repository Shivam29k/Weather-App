import axios from "axios";

const API_open_weather = "38700d4014436cf333fe875864f261fc";

export const loadWeather = async (lat, lon) => {
  const currentWeather = await current(lat, lon);
  const forecastWeather = await forecast(lat, lon);

  return {
    current: currentWeather,
    forecast: forecastWeather
  }
};

async function current(lat, lon) {
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_open_weather}&units=metric`;

  return axios
    .get(URL)
    .then(function (response) {
      const data = response.data;
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
}

async function forecast(lat, lon) {
  const URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_open_weather}&units=metric`

  return axios
    .get(URL)
    .then((response) => {
      let min1 = 100, max1 = -100;
      response.data.list.slice(0, 8).forEach((temp) => {
        if (temp.main.temp_min < min1) {
          min1 = temp.main.temp_min;
        }
        if (temp.main.temp_max > max1) {
          max1 = temp.main.temp_max;
        }
      });
      let min2 = 100, max2 = -100;
      response.data.list.slice(8, 16).forEach((temp) => {
        if (temp.main.temp_min < min2) {
          min2 = temp.main.temp_min;
        }
        if (temp.main.temp_max > max2) {
          max2 = temp.main.temp_max;
        }
      });
      let min3 = 100, max3 = -100;
      response.data.list.slice(16, 24).forEach((temp) => {
        if (temp.main.temp_min < min3) {
          min3 = temp.main.temp_min;
        }
        if (temp.main.temp_max > max3) {
          max3 = temp.main.temp_max;
        }
      });
      let min4 = 100, max4 = -100;
      response.data.list.slice(24, 32).forEach((temp) => {
        if (temp.main.temp_min < min4) {
          min4 = temp.main.temp_min;
        }
        if (temp.main.temp_max > max4) {
          max4 = temp.main.temp_max;
        }
      });
      let min5 = 100, max5 = -100;
      response.data.list.slice(32, 40).forEach((temp) => {
        if (temp.main.temp_min < min5) {
          min5 = temp.main.temp_min;
        }
        if (temp.main.temp_max > max5) {
          max5 = temp.main.temp_max;
        }
      });
      return {
        day1: {
          min: min1,
          max: max1
        },
        day2: {
          min: min2,
          max: max2
        },
        day3: {
          min: min3,
          max: max3
        },
        day4: {
          min: min4,
          max: max4
        },
        day5: {
          min: min5,
          max: max5
        }
      };
    })       

    // .then((response) => {
    //   let days = {};
    //   for (let i = 0; i < 5; i++) {
    //     let min = 100, max = -100;
    //     response.data.list.slice(i * 8, (i + 1) * 8).forEach((temp) => {
    //       if (temp.main.temp_min < min) {
    //         min = temp.main.temp_min;
    //       }
    //       if (temp.main.temp_max > max) {
    //         max = temp.main.temp_max;
    //       }
    //     });
    //     days[`day${i + 1}`] = { min, max };
    //   }
    //   return days;
    // })
}

const phagwara = {
  lat: 31.2436,
  lon: 75.703835,
};

// loadWeather(phagwara.lat, phagwara.lon)
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error(error);
//   });