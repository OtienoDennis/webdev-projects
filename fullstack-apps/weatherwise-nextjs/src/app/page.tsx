import NavBar from '@/components/NavBar';
import DashboardUI from './dashboard/DashboardUI';
import OtherCities from '@/components/OtherCities';
import Contacts from '@/components/Contacts';

export default function Home() {
  return (
    <div className='bg-[#BFD7FF] h-screen p-3 md:px-10 overflow-auto relative'>
      <h1 className='font-bold text-xl md:text-3xl text-center p-2'>
        Weather Wise App
      </h1>
      <NavBar />
      <DashboardUI />
      <div className='flex justify-between md:flex-col md:gap-5 md:fixed md:top-60 md:left-100'>
        <OtherCities />
        <OtherCities />
        <OtherCities />
      </div>
      <Contacts />
    </div>
  );
}
