import { Request, Response } from 'express';
import { fetchWeather } from '../services/openWeatherService';

export const getWeather = async (req: Request, res: Response) => {
  try {
    const { city } = req.query;
    if (!city || typeof city !== 'string') {
      return res.status(400).json({ error: 'City is required' });
    }
    const data = await fetchWeather(city);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
};
