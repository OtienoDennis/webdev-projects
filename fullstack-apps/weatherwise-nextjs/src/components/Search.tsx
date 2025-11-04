export default function Search() {
  return (
    <div className='flex gap-3 w-[100%] md:w-[50vw] md:content-start'>
      <input
        className='bg-[#e3e4e6] text-2xl p-3 w-2/3 rounded-2xl h-11 focus:outline-none'
        placeholder='Enter text here'
      />
      <button className='font-extrabold text-3xl bg-[#EAA221] p-1 rounded-lg cursor-pointer text-white'>
        SEARCH
      </button>
    </div>
  );
}
