import useFetchDataApi from '../../fetchingFunctions/useFetchDataApi';
import ErrorComponent from '../ErrorComponent';

export default function FlightOffers({ cityCode, dispatch, myCityCode }) {
  const isValidParameters = cityCode && myCityCode;

  const date = new Date(new Date().setDate(new Date().getDate() + 1))
    .toISOString()
    .split('T')[0];
  const flightkeyword = `${cityCode}&departureDate=${date}&adults=1`;

  const URLFLIGHTOFFERS = `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${myCityCode}&max=10&destinationLocationCode=`;

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

  if (!isValidParameters) {
    return <ErrorComponent errortext='Invalid parameters provided.' />;
  }

  if (flightLoading) {
    return (
      <h1 className='text-2xl text-white font-extrabold text-center'>
        Loading...
      </h1>
    );
  }

  if (flightError) {
    return <ErrorComponent errortext={flightError} />;
  }

  if (flightData?.data?.length === 0) {
    return (
      <ErrorComponent
        errortext={'No Flight Data to this Destination Available'}
      />
    );
  }
  const departureDate =
    flightData?.data?.[0]?.itineraries?.[0]?.segments?.[0]?.departure?.at.split(
      'T'
    )[0];
  const departureTime =
    flightData?.data?.[0]?.itineraries?.[0]?.segments?.[0]?.departure?.at.split(
      'T'
    )[1];
  const farePrice = flightData?.data?.[0]?.price?.total;
  const farePriceCurrency = flightData?.data?.[0]?.price?.currency;
  const availableSeats = flightData?.data?.[0]?.numberOfBookableSeats;
  const classSeats =
    flightData?.data[0]?.travelerPricings[0]?.fareDetailsBySegment[1]?.cabin;

  return (
    <div className='border-slate-300 border-2 rounded-md p-2 bg-slate-400 my-2'>
      <h3 className='text-center font-extrabold underline text-2xl'>
        Flight Offers
      </h3>
      <div className='border-slate-300 border-2 rounded-md p-2 bg-slate-400 my-2 '>
        <ul className='flex justify-between gap-28'>
          <li className='text-md font-extrabold'>Departure Date:</li>
          <li className='text-2xl font-extrabold text-[#ACE1AF]'>
            {departureDate}
          </li>
        </ul>
        <ul className='flex justify-between gap-28'>
          <li className='text-md font-extrabold'>Departure Time:</li>
          <li className='text-2xl font-extrabold text-[#ACE1AF]'>
            {departureTime}
          </li>
        </ul>
        <ul className='flex justify-between '>
          <li className='text-md font-extrabold'>Air Fare:</li>
          <li className='text-2xl font-extrabold text-[#ACE1AF]'>{`${farePrice} ${farePriceCurrency}`}</li>
        </ul>
        <ul className='flex justify-between '>
          <li className='text-md font-extrabold'>Available Seats:</li>
          <li className='text-2xl font-extrabold text-[#ACE1AF]'>
            {availableSeats} SEATS
          </li>
        </ul>
        <ul className='flex justify-between '>
          <li className='text-md font-extrabold'>Class:</li>
          <li className='text-2xl font-extrabold text-[#ACE1AF]'>
            {classSeats}
          </li>
        </ul>
      </div>
    </div>
  );
}
