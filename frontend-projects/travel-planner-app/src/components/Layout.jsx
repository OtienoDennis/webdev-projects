import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <h1 className='text-[#333] text-center text-xl pt-8 md:text-3xl font-extrabold font-sans'>
        TRAVEL <span className='text-[#ca1a37]'>PLANNER</span>
      </h1>
      <Outlet />
    </div>
  );
}
