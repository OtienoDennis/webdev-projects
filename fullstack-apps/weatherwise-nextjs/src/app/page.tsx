import Advert from '@/components/Advert';
import Contacts from '@/components/Contacts';
import NavBar from '@/components/NavBar';
import OtherCities from '@/components/OtherCities';
import DashboardUI from './dashboard/DashboardUI';

export default async function Home() {
  console.log(process.env.WEATHER_API_KEY);

  return (
    <div className='bg-[#BFD7FF] h-screen p-3 md:px-10 overflow-auto relative text-black flex flex-col justify-evenly md:block'>
      <h1 className='font-bold text-xl md:text-3xl text-center p-2'>
        Weather Wise App
      </h1>
      <NavBar />
      <DashboardUI />
      <div className='grid gap-3 grid-cols-3 md:grid-rows-3 md:grid-cols-none md:absolute md:top-[230px] md:left-[25.5vw] md:h-[65.5vh] mt-4 md:mt-0'>
        <OtherCities />
        <OtherCities />
        <OtherCities />
      </div>
      <Advert />
      <Contacts />
    </div>
  );
}

