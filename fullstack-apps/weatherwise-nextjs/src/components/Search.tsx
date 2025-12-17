'use client';

import { useRef, useState } from 'react';

export default function Search() {
  const cityRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  // API CALL
  const getWeatherData = async (city: string) => {
    console.log(process.env.NEXT_PUBLIC_WEATHER_API_KEY);
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${city}&days=7&aqi=no&alerts=yes`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }

      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const handleClick = async () => {
    if (!cityRef.current || !cityRef.current.value.trim()) {
      alert('Please enter a city name');
      return;
    }
    await getWeatherData(cityRef.current.value);
    if (cityRef.current) {
      cityRef.current.value = '';
    }
  };

  return (
    <div className='flex justify-between gap-3 w-[100%] md:w-[44vw]'>
      <input
        ref={cityRef}
        className='bg-[#e3e4e6] text-2xl p-3 w-3/3 rounded-2xl h-11 focus:outline-none'
        placeholder='Enter city name!'
        disabled={isLoading}
      />
      <button
        className='font-extrabold text-3xl bg-[#EAA221] p-1 rounded-lg cursor-pointer text-white'
        onClick={handleClick}>
        {isLoading ? 'LOADING ...' : 'SEARCH'}
      </button>
    </div>
  );
}
