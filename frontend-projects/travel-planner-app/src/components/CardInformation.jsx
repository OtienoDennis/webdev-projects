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
      <div className='flex sm:flex-row justify-between items-center mt-3 bg-slate-400 p-3 sm:p-4 rounded hover:scale-105 hover:cursor-pointer transition ease-in-out duration-200 w-11/12 m-auto'>
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
