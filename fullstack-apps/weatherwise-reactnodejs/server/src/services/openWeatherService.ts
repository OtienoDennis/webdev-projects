import axios from 'axios';

export const fetchWeather = async (city: string) => {
  const apiKey = process.env.WEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  const response = await axios.get(url);
  return response.data;
};
