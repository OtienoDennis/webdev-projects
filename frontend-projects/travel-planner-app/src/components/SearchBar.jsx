import { useState } from 'react';

export default function SearchBar({ dispatch }) {
  const [keyword, setKeyWord] = useState('');
  const [city, setCity] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (keyword.trim().length < 3) {
      setKeyWord('');
      return;
    }
    dispatch({ type: 'search', payload: keyword });
    dispatch({ type: 'setCurrentCity', payload: city });
    dispatch({ type: 'setLoadingState', payload: true });
    setKeyWord('');
    setCity('');
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='bg-[#bb8686] flex gap-4 p-5 rounded-md my-5 md:flex-row md:justify-between flex-col md:items-center w-11/12 m-auto'>
      <button className='text-white font-bold bg-black p-1 rounded-md hover:bg-slate-700'>
        SEARCH
      </button>
      <input
        type='text'
        placeholder='Your Current City!'
        className='p-2 rounded-md outline-none md:w-4/12'
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <input
        type='text'
        placeholder='Where are you Visiting!'
        className='p-2 rounded-md outline-none'
        value={keyword}
        onChange={(e) => setKeyWord(e.target.value)}
      />
    </form>
  );
}
