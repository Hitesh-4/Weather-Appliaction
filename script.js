let citySearch = document.querySelector(".weather_search");

let cityName = document.querySelector(".weather_city");
let dateTime = document.querySelector(".Weather_date_time");
let w_forcast = document.querySelector(".weather_forcast");
let w_icon = document.querySelector(".weather_icon");
let w_temperature = document.querySelector(".weather_temperature");
let w_minTem = document.querySelector(".weather_min");
let w_maxTem = document.querySelector(".weather_max");

let w_feelsLike = document.querySelector(".weather_feelsLike");
let w_humidity = document.querySelector(".weather_humidity");
let w_wind = document.querySelector(".weather_wind");
let w_pressure = document.querySelector(".weather_pressure");

// Actual contry name
const getCounteryName = (code) => {
  return new Intl.DisplayNames([code], { type: "region" }).of(code);
};

// Actual date and time
const getDateTme = (dt) => {
  // let dt = 1732548950;

  const curDate = new Date(dt * 1000);
  console.log(curDate);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const formatter = new Intl.DateTimeFormat("en-IN", options);
  console.log(formatter);
  return formatter.format(curDate);
};

let city = "cuttack";

// search
citySearch.addEventListener("submit", (e) => {
  e.preventDefault();

  let cityName = document.querySelector(".city_name");
  console.log(cityName.value);
  city = cityName.value;
  getWeatherData();
  cityName.value = "";
});

const getWeatherData = async () => {
  const wUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=1e461f89b1b0ad037829d0b375bbe43a`;
  // const wUrl = `https://api.openweathermap.org/data/2.5/weather?q=mumbai&APPID=1e461f89b1b0ad037829d0b375bbe43a`;
  // try {
  //   const res = await fetch(wUrl);
  //   const data = await res.json();
  //   console.log(data);
  // } catch (error) {
  //   console.log(error);
  // }
  console.log("jii");

  const res = await fetch(wUrl);
  if (res) {
    const data = await res.json();
    console.log(data);

    const { main, name, weather, wind, sys, dt } = data;
    cityName.innerHTML = `${name}, ${getCounteryName(sys.country)}`;
    dateTime.innerHTML = getDateTme(dt);

    w_forcast.innerHTML = weather[0].main;
    w_icon.innerHTML = `<img src = "http://openweathermap.org/img/wn/${weather[0].icon}@4x.png" />`;

    w_temperature.innerHTML = `${main.temp}&#176`;
    w_minTem.innerHTML = `Min: ${main.temp_min.toFixed()}&#176`;
    w_maxTem.innerHTML = `Max: ${main.temp_max.toFixed()}&#176`;

    w_feelsLike.innerHTML = `${main.feels_like.toFixed(2)}&#176`;
    w_humidity.innerHTML = `${main.humidity}%`;
    w_pressure.innerHTML = `${main.pressure} hPa`;
    w_wind.innerHTML = `${wind.speed} m/s`;
  } else {
    console.log("Iam soory");
  }
};

document.body.addEventListener("load", getWeatherData());
// document.querySelector(".weather_forcast").addEventListener("click", getWeatherData);
