import axios from 'axios';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const city = searchParams.get('city') || 'Nairobi'; // Get the location of the current city and pass it as default
  const response = await axios.get(
    `https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}`
  );
  console.log(response.data)
}
