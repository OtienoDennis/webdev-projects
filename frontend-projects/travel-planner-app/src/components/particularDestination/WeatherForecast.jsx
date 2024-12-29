
import useFetchWeatherForecast from '../../fetchingFunctions/useFetchWeatherForecast';
import ErrorComponent from '../ErrorComponent';

export default function WeatherForecast({city, dispatch}) {
  const isValidParameters = city;
 
  // FETCHING WEATHER FORECAST
  const { formattedWeatherData, loading, error } = useFetchWeatherForecast(
    isValidParameters ? city : '',
    dispatch
  );

  if (loading) {
    return (
      <p className='text-2xl text-white font-extrabold text-center'>
        Loading weather data...
      </p>
    );
  }
  
  if (error) {
    return <ErrorComponent errortext={error} />;
  }

  if (!formattedWeatherData) {
    return (
      <p className='text-2xl text-white font-extrabold text-center'>
        No weather data available.
      </p>
    );
  }
  return (
    <div className='border-slate-300 border-2 rounded-md p-2 bg-slate-400 my-2'>
      <h3 className='text-center text-gray-200 font-extrabold underline'>
        Weather Forecast
      </h3>
      <div className='border-slate-300 border-2 rounded-md p-2 bg-slate-400 my-2 '>
        <ul className='flex justify-between '>
          <li className='text-sm font-semibold text-gray-300'>One</li>
          <li className='text-sm font-semibold text-gray-300'>num</li>
        </ul>
        <ul className='flex justify-between '>
          <li className='text-sm font-semibold text-gray-300'>One</li>
          <li className='text-sm font-semibold text-gray-300'>num</li>
        </ul>
      </div>
    </div>
  );
}
