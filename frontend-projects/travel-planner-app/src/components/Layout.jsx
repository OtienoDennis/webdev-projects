import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className='flex flex-col items-center'>
      <Link to='/'>
        <h1 className='text-[#333] text-center text-xl pt-8 md:text-3xl font-extrabold font-sans bg-white bg-opacity-40 w-max px-1 rounded-lg mt-2 h-max'>
          TRAVEL<span className='text-[#ca1a37]'> PLANNER</span>
        </h1>
      </Link>
      <Outlet />
    </div>
  );
}
