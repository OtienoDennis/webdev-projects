import { useParams } from 'react-router-dom';
import FlightOffers from './particularDestination/FlightOffers';
import HotelAccomodations from './particularDestination/HotelAccomodations';
import TopAttractions from './particularDestination/TopAttractions';
import WeatherForecast from './particularDestination/WeatherForecast';

export default function DestinationInformation({ dispatch, myCityCode }) {
  const { city, cityCode, latitude, longitude } = useParams();

  return (
    <div className='rounded-lg p-3 my-3 bg-slate-500 shadow-lg shadow-white '>
      <FlightOffers
        cityCode={cityCode}
        dispatch={dispatch}
        myCityCode={myCityCode}
      />
      <HotelAccomodations
        cityCode={cityCode}
        dispatch={dispatch}
        city={city}
        latitude={latitude}
        longitude={longitude}
      />
      <TopAttractions
        dispatch={dispatch}
        latitude={latitude}
        longitude={longitude}
      />
      <WeatherForecast city={city} dispatch={dispatch} />
    </div>
  );
}
