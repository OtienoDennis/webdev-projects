import SearchBar from './components/SearchBar';

function App() {

  return (
    <div className='w-[calc(100vw-40px)] h-[calc(100vh-40px)] bg-sky-400 mx-auto my-5 rounded-md flex flex-col items-center gap-5'>
      <h1 className='text-blue-900 text-center pt-8 text-2xl font-bold font-sans'>TRAVEL PLANNER</h1>
      <SearchBar />
    </div>
  );
}

export default App