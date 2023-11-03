import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
  params: {
    units: "metric",
    lang: "kr",
    appid: "23b6f599a85d3faeb8f93c2632e081b9",
  },
});

export const getWeather = () => {
  const lat = 35.15798233915634;
  const lon = 129.0599620036169;
  return instance.get(`weather?lat=${lat}&lon=${lon}`);
};
