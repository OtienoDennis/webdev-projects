import useFetchDataApi from '../../fetchingFunctions/useFetchDataApi';
import ErrorComponent from '../ErrorComponent';

export default function HotelAccomodations(cityCode, dispatch) {
  const isValidParameters = cityCode;
  const URLHOTELOFFERS = `https://test.api.amadeus.com/v2/shopping/hotel-offers?cityCode=`;

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

  if (!isValidParameters) {
    return <ErrorComponent errortext='Invalid parameters provided.' />;
  }

  if (hotelLoading) {
    return (
      <h1 className='text-2xl text-white font-extrabold text-center'>
        Loading...
      </h1>
    );
  }

  if (hotelError) {
    return <ErrorComponent errortext={hotelError} />;
  }
  return (
    <div className='border-slate-300 border-2 rounded-md p-2 bg-slate-400 my-2'>
      <h3 className='text-center font-extrabold underline text-2xl'>
        Hotel Accomodations
      </h3>
      <div className='border-slate-300 border-2 rounded-md p-2 bg-slate-400 my-2 '>
        <ul className='flex justify-between '>
          <li className='text-md font-extrabold'>One</li>
          <li className='text-md font-extrabold'>num</li>
        </ul>
        <ul className='flex justify-between '>
          <li className='text-md font-extrabold'>One</li>
          <li className='text-md font-extrabold'>num</li>
        </ul>
        <ul className='flex justify-between '>
          <li className='text-md font-extrabold'>One</li>
          <li className='text-md font-extrabold'>num</li>
        </ul>
        <ul className='flex justify-between '>
          <li className='text-md font-extrabold'>One</li>
          <li className='text-md font-extrabold'>num</li>
        </ul>
      </div>
    </div>
  );
}
