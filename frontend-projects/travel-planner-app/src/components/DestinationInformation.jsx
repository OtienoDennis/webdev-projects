import { Link, useParams } from 'react-router-dom';
import FlightOffers from './particularDestination/FlightOffers';
import HotelAccomodations from './particularDestination/HotelAccomodations';
import TopAttractions from './particularDestination/TopAttractions';
import WeatherForecast from './particularDestination/WeatherForecast';
import { useEffect, useState } from 'react';
import Button from './Button';

export default function DestinationInformation({
  dispatch,
  myCityCode,
  itineraryInformation,
}) {
  const { city, cityCode, latitude, longitude } = useParams();
  const [itineraryData, setItineraryData] = useState({});
  const [selectedAttraction, setSelectedAttraction] = useState({});
  // const [finalItineraryState, setFinalItineraryState] = useState({});

  function handleClick() {
    if (
      Object.keys(itineraryData).length < 1 &&
      Object.keys(selectedAttraction).length < 1
    )
      return;

    const finalItineraryState = {
      city: city,
      flightTime: itineraryData.departureTime,
      flightDate: itineraryData.departureDate,
      airFare: itineraryData.airFare,
      currency: itineraryData.currency,
      attractionToVisit: selectedAttraction.attractionToVisit,
    };

    console.log(itineraryData);
    console.log(selectedAttraction);
    console.log(finalItineraryState);

    const updateItineraryInformation = [...itineraryInformation];
    const index = itineraryInformation.length;
    updateItineraryInformation.splice(index, 1, finalItineraryState);

    console.log(updateItineraryInformation);

    
    dispatch({
      type: 'itineraryInformation',
      payload: updateItineraryInformation,
    });
  }



  return (
    <div className='rounded-lg py-4 px-2 my-3 bg-slate-500 bg-opacity-30 shadow-lg shadow-white w-11/12 m-auto overflow-y-auto'>
      <Button
        onClick={handleClick}
        className={
          'text-white text-xl font-semibold bg-green-700 p-2 rounded-md hover:text-slate-300 hover:cursor-pointer transition ease-in-out duration-200 active:scale-95'
        }>
        ADD ITINERARY
      </Button>

      <div className='md:grid lg:grid md:grid-cols-2 gap-4 lg:grid-cols-2'>
        <div className='h-screen overflow-y-auto mb-3'>
          <FlightOffers
            cityCode={cityCode}
            dispatch={dispatch}
            myCityCode={myCityCode}
            setItineraryData={setItineraryData}
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
            setSelectedAttraction={setSelectedAttraction}
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
