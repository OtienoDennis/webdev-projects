import useFetchDataApi from '../fetchingFunctions/useFetchDataApi';
import usefetchWeatherForecast from '../fetchingFunctions/usefetchWeatherForecast';
import { useParams } from 'react-router-dom';
import ErrorComponent from './ErrorComponent';
import FlightOffers from './particularDestination/FlightOffers';
import HotelAccomodations from './particularDestination/HotelAccomodations';
import TopAttractions from './particularDestination/TopAttractions';
import WeatherForecast from './particularDestination/WeatherForecast';

export default function DestinationInformation({ dispatch, myCityCode }) {
  const { city, cityCode, latitude, longitude } = useParams();
  const date = new Date().toISOString().split('T')[0];

  const isValidParameters = city && cityCode && latitude && longitude;

  const flightkeyword = `${cityCode}&departureDate=${date}&adults=1`;

  const URLHOTELOFFERS = `https://test.api.amadeus.com/v2/shopping/hotel-offers?cityCode=`;
  const URLFLIGHTOFFERS = `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${myCityCode}&max=10&destinationLocationCode=`;
  const URLTOPATTRACTIONS = `https://test.api.amadeus.com/v1/reference-data/locations/pois?latitude=${latitude}&longitude=`;

  // FETCHING HOTEL OFFERS
  const {
    data: hotelData,
    error: hotelError,
    loading: hotelLoading,
  } = useFetchDataApi(
    URLHOTELOFFERS,
    isValidParameters ? cityCode : '',
    dispatch,
    {
      dataActionType: 'hotelOffers',
      loadingActionType: 'setLoadingState',
    }
  );

  // FETCHING FLIGHT OFFERS
  const {
    data: flightData,
    error: flightError,
    loading: flightLoading,
  } = useFetchDataApi(
    URLFLIGHTOFFERS,
    isValidParameters ? flightkeyword : '',
    dispatch,
    {
      dataActionType: 'flightOffers',
      loadingActionType: 'setLoadingState',
    }
  );

  // FETCHING TOP ATTRACTION SITES
  const {
    data: attractionsSiteData,
    error: attractionsSiteError,
    loading: attractionsSiteLoading,
  } = useFetchDataApi(
    URLTOPATTRACTIONS,
    isValidParameters ? longitude : '',
    dispatch,
    {
      dataActionType: 'topAttractions',
      loadingActionType: 'setLoadingState',
    }
  );

  // FETCHING WEATHER FORECAST
  const { formattedWeatherData, loading, error } = usefetchWeatherForecast(
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

  console.log('Hotel Data:', hotelData);
  console.log('Flight Data:', flightData);
  console.log('Attractions Data:', attractionsSiteData);
  console.log('Weather Data:', formattedWeatherData);

  if (!isValidParameters) {
    return <ErrorComponent errortext='Invalid parameters provided.' />;
  }

  if (hotelLoading || flightLoading || attractionsSiteLoading) {
    return (
      <h1 className='text-2xl text-white font-extrabold text-center'>
        Loading...
      </h1>
    );
  }

  if (hotelError || flightError || attractionsSiteError) {
    return (
      <ErrorComponent
        errortext={hotelError || flightError || attractionsSiteError}
      />
    );
  }
  return (
    <div className='rounded-lg p-3 my-3 bg-slate-500 shadow-lg shadow-white'>
      <FlightOffers
        flightData={flightData}
        error={flightError}
        loading={flightLoading}
      />
      <HotelAccomodations
        hotelData={hotelData}
        error={hotelError}
        loading={hotelLoading}
      />
      <TopAttractions
        attractionsSiteData={attractionsSiteData}
        error={attractionsSiteError}
        loading={attractionsSiteLoading}
      />
      <WeatherForecast
        formattedWeatherData={formattedWeatherData}
        error={error}
        loading={loading}
      />

      {/* <h1 className='text-center text-white font-extrabold'>EXPLORE PARIS</h1>
      <div className='border-slate-300 border-2 rounded-md p-2 bg-slate-400 my-2'>
        <h3 className='text-center text-gray-200 font-extrabold underline'>
          Flight Offers
        </h3>
        <div className='border-slate-300 border-2 rounded-md p-2 bg-slate-400 my-2 '>
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
        <div className='border-slate-300 border-2 rounded-md p-2 bg-slate-400 my-2 '>
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
        <div className='border-slate-300 border-2 rounded-md p-2 bg-slate-400 my-2 '>
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
      </div> */}
    </div>
  );
}
