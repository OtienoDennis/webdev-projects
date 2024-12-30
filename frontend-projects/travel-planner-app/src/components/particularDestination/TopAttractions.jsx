import useFetchDataApi from '../../fetchingFunctions/useFetchDataApi';
import ErrorComponent from '../ErrorComponent';

export default function TopAttractions({ latitude, longitude, dispatch }) {
  const isValidParameters = latitude && longitude;

  const URLTOPATTRACTIONS = `https://test.api.amadeus.com/v1/reference-data/locations/pois?latitude=${latitude}&longitude=`;

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

   if (!isValidParameters) {
      return <ErrorComponent errortext='Invalid parameters provided.' />;
    }
  
    if (attractionsSiteLoading) {
      return (
        <h1 className='text-2xl text-white font-extrabold text-center'>
          Loading...
        </h1>
      );
    }
  
    if (attractionsSiteError) {
      return (
        <ErrorComponent
          errortext={attractionsSiteError}
        />
      );
    }

  return (
    <div className='border-slate-300 border-2 rounded-md p-2 bg-slate-400 my-2'>
      <h3 className='text-center font-extrabold underline text-2xl'>
        Top Attractions
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
