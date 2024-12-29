import { Link } from 'react-router-dom';

export default function CardInformation({ city, cityCode , country, latitude, longitude}) {

  return (
    <Link to={`/destination/${city}/${cityCode}/${latitude}/${longitude}`}>
      <div className='flex justify-between mt-3 bg-slate-400 p-2 rounded hover:scale-105 hover:cursor-pointer transition ease-in-out duration-[25]'>
        <p className='text-white text-sm'>{city}</p>
        <p className='text-white text-sm'>{country}</p>
      </div>
    </Link>
  );
}
