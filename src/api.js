import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
  params: {
    units: "metric",
    lang: "kr",
    appid: "23b6f599a85d3faeb8f93c2632e081b9",
  },
});

export const getWeather = ({ queryKey }) => {
  const [_, lat, lon] = queryKey;

  return instance
    .get(`weather?lat=${lat}&lon=${lon}`)
    .then((response) => response.data);
};
