import { Link, useParams } from 'react-router-dom';
import FlightOffers from './particularDestination/FlightOffers';
import HotelAccomodations from './particularDestination/HotelAccomodations';
import TopAttractions from './particularDestination/TopAttractions';
import WeatherForecast from './particularDestination/WeatherForecast';

export default function DestinationInformation({ dispatch, myCityCode }) {
  const { city, cityCode, latitude, longitude } = useParams();

  return (
    <div className='rounded-lg py-4 px-2 my-3 bg-slate-500 bg-opacity-30 shadow-lg shadow-white w-11/12 m-auto overflow-y-auto'>
      <div className='md:grid lg:grid md:grid-cols-2 gap-4 lg:grid-cols-2'>
        <div className='h-screen overflow-y-auto mb-3'>
          <FlightOffers
            cityCode={cityCode}
            dispatch={dispatch}
            myCityCode={myCityCode}
          />
        </div>
        <div className='h-screen overflow-y-auto mb-3'>
          <HotelAccomodations
            cityCode={cityCode}
            dispatch={dispatch}
            city={city}
            latitude={latitude}
            longitude={longitude}
          />
        </div>
        <div className='md:col-span-2'>
          <TopAttractions
            dispatch={dispatch}
            latitude={latitude}
            longitude={longitude}
          />
        </div>
        <div className='md:col-span-2'>
          <WeatherForecast city={city} dispatch={dispatch} />
        </div>
        <Link to='/itinerary' className='md:col-span-2'>
          <p className='text-white font-extrabold text-center  bg-amber-500 p-2 rounded text-2xl hover:cursor-pointer active:scale-95 transition ease-in-out duration-200 w-max m-auto'>
            TO ITINERARY
          </p>
        </Link>
      </div>
    </div>
  );
}
