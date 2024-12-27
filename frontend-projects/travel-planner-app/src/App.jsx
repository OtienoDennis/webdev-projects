import { useReducer } from 'react';
import DestinationCard from './components/DestinationCard';
import SearchBar from './components/SearchBar';
import { useDebounce } from './customHooks/useDebounce';
import { useFetchDestinationData } from './customHooks/useFetchDestinationData';
import DestinationInformation from './components/DestinationInformation';

const initialState = {
  destinationInformation: [],
  keyword: '',
  loadingState: true,
};

function reducer(state, action) {
  switch (action.type) {
    case 'destinationData':
      return {
        ...state,
        destinationInformation: action.payload,
      };
    case 'search':
      return {
        ...state,
        keyword: action.payload,
      };
    case 'setLoadingState':
      return {
        ...state,
        loadingState: action.payload,
      };
    default:
      throw new Error('Action is unknown');
  }
}

const URL = `https://test.api.amadeus.com/v1/reference-data/locations?subType=CITY&keyword=`;
const URL2 = `https://test.api.amadeus.com/v1/reference-data/locations/cities?keyword=`;
const URL3 = `https://test.api.amadeus.com/v2/shopping/hotel-offers?cityCode=`;
const URL4 = `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=LON&destinationLocationCode=PAR&departureDate=2024-10-01&adults=1`;

function App() {
  const [{ destinationInformation, keyword, loadingState }, dispatch] =
    useReducer(reducer, initialState);

  const debouncedKeyword = useDebounce(keyword, 1000);
  useFetchDestinationData(URL, debouncedKeyword, dispatch);

  // useEffect(() => {
  //   if (data.length > 0) {
  //     console.log(data);
  //     dispatch({ type: 'destinationData', payload: data });
  //   }
  // }, [data, dispatch]);

  return (
    <div className='w-[calc(100vw-40px)] h-[calc(100vh-40px)] bg-sky-400 mx-auto my-5 rounded-md flex flex-col items-center gap-5 overflow-y-auto'>
      <h1 className='text-blue-900 text-center pt-8 text-2xl font-bold font-sans'>
        TRAVEL PLANNER
      </h1>
      <SearchBar dispatch={dispatch} />
      {/* <DestinationCard
        keyword={keyword}
        information={destinationInformation}
        loadingState={loadingState}
        dispatch={dispatch}
      /> */}
      <DestinationInformation />
    </div>
  );
}

export default App;