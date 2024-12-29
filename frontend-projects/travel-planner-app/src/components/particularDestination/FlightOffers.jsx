import useFetchDataApi from '../../fetchingFunctions/useFetchDataApi';
import ErrorComponent from '../ErrorComponent';

export default function FlightOffers({ cityCode, dispatch, myCityCode }) {
  const isValidParameters = cityCode ;

  const date = new Date().toISOString().split('T')[0];
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
    
      if (flightLoading ) {
        return (
          <h1 className='text-2xl text-white font-extrabold text-center'>
            Loading...
          </h1>
        );
      }
    
      if (flightError ) {
        return (
          <ErrorComponent
            errortext={flightError }
          />
        );
      }
 
  return (
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
  );
}
