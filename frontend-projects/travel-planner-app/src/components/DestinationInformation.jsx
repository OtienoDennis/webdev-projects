import { useParams } from 'react-router-dom';
import FlightOffers from './particularDestination/FlightOffers';
import HotelAccomodations from './particularDestination/HotelAccomodations';
import TopAttractions from './particularDestination/TopAttractions';
import WeatherForecast from './particularDestination/WeatherForecast';

export default function DestinationInformation({ dispatch, myCityCode }) {
  const { city, cityCode, latitude, longitude } = useParams();

  return (
    <div className='rounded-lg py-4 px-2 my-3 bg-slate-500 shadow-lg shadow-white w-11/12 m-auto overflow-y-auto'>
      <div className='md:grid lg:grid md:grid-cols-2 gap-4 lg:grid-cols-2'>
        <div className='h-screen overflow-y-auto'>
          <FlightOffers
            cityCode={cityCode}
            dispatch={dispatch}
            myCityCode={myCityCode}
          />
        </div>
        <div className='h-screen overflow-y-auto'>
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
      </div>
    </div>
  );
}
