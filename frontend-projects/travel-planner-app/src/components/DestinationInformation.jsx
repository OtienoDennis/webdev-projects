import useFetchDataApi from '../fetchingFunctions/useFetchDataApi';
import fetchWeatherForecast from '../fetchingFunctions/usefetchWeatherForecast';
import { useParams } from 'react-router-dom';

export default function DestinationInformation({ dispatch }) {
  const {city, cityCode} = useParams();
  console.log(city, cityCode);

  const URLHOTELOFFERS = `https://test.api.amadeus.com/v2/shopping/hotel-offers?cityCode=`; // REQUIRES THE CODE AS THE KEYWORD
  const URLFLIGHTOFFERS = `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=LON&destinationLocationCode=PAR&departureDate=2024-10-01&adults=1`; // will check on the required parameters NEXT

  useFetchDataApi(URLHOTELOFFERS, cityCode, dispatch, {
    dataActionType: 'hotelOffers',
    loadingActionType: 'setLoadingState',
  });

  // useFetchDataApi(URLFLIGHTOFFERS, cityCode, dispatch, {
  //   dataActionType: 'flightOffers',
  //   loadingActionType: 'setLoadingState',
  // });

  fetchWeatherForecast(city, dispatch);

  return (
    <div className='rounded-lg p-3 my-3 bg-slate-500 shadow-lg shadow-white'>
      <h1 className='text-center text-white font-extrabold'>EXPLORE PARIS</h1>
      <div>
        <h3 className='text-center text-gray-200 font-extrabold underline'>
          Flight Offers
        </h3>
        <div className='border-slate-300 border-2 rounded-md p-2 bg-slate-400 my-2'>
          <ul className='flex justify-between gap-28'>
            <li className='text-sm font-semibold text-gray-300'>one</li>
            <li className='text-sm font-semibold text-gray-300'>two</li>
          </ul>
          <ul className='flex justify-between '>
            <li className='text-sm font-semibold text-gray-300'>One</li>
            <li className='text-sm font-semibold text-gray-300'>num</li>
          </ul>
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
      <div className='border-slate-300 border-2 rounded-md p-2 bg-slate-400 my-2'>
        <h3 className='text-center text-gray-200 font-extrabold underline'>
          Top Attractions
        </h3>
        <div>
          <ul className='flex justify-between '>
            <li className='text-sm font-semibold text-gray-300'>One</li>
            <li className='text-sm font-semibold text-gray-300'>num</li>
          </ul>
          <ul className='flex justify-between '>
            <li className='text-sm font-semibold text-gray-300'>One</li>
            <li className='text-sm font-semibold text-gray-300'>num</li>
          </ul>
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
      <div className='border-slate-300 border-2 rounded-md p-2 bg-slate-400 my-2'>
        <h3 className='text-center text-gray-200 font-extrabold underline'>
          Hotel Accomodations
        </h3>
        <div>
          <ul className='flex justify-between '>
            <li className='text-sm font-semibold text-gray-300'>One</li>
            <li className='text-sm font-semibold text-gray-300'>num</li>
          </ul>
          <ul className='flex justify-between '>
            <li className='text-sm font-semibold text-gray-300'>One</li>
            <li className='text-sm font-semibold text-gray-300'>num</li>
          </ul>
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
      <div className='border-slate-300 border-2 rounded-md p-2 bg-slate-400 my-2'>
        <h3 className='text-center text-gray-200 font-extrabold underline'>
          Weather Forecast
        </h3>
        <div>
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
    </div>
  );
}
