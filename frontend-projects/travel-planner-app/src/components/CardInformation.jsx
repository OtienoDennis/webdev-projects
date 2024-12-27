export default function CardInformation({city, country}) {
  return (
    <div className='flex justify-between mt-3 bg-slate-400 p-2 rounded hover:scale-105 hover:cursor-pointer transition ease-in-out duration-[25]'>
      <p className='text-white text-sm'>{city}</p>
      <p className='text-white text-sm'>{country}</p>
    </div>
  );
}
