export default function SearchBar() {
  return (
    <div className='bg-[#bb8686] flex gap-4 p-5 rounded-md'>
      <button className='text-white font-bold bg-black p-1 rounded-md'>
        SEARCH
      </button>
      <input
        type='text'
        placeholder='CITY'
        className='p-1 rounded-md outline-none'
      />
      <input
        type='text'
        placeholder='KEYWORD'
        className='p-1 rounded-md outline-none'
      />
    </div>
  );
}
