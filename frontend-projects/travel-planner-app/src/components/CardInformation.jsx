import { Link } from 'react-router-dom';

export default function CardInformation({
  city,
  cityCode,
  country,
  latitude,
  longitude,
}) {
  return (
    <Link to={`/destination/${city}/${cityCode}/${latitude}/${longitude}`}>
      <div className='flex flex-row justify-between gap-5 mt-3 bg-slate-400 p-3 rounded hover:scale-105 hover:cursor-pointer transition ease-in-out duration-200'>
        <p className='text-white text-sm sm:text-base md:text-lg font-medium'>
          {city}
        </p>
        <p className='text-white text-sm sm:text-base md:text-lg font-medium'>
          {country}
        </p>
      </div>
    </Link>
  );
}
