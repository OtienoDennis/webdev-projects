import OtherForecast from '@/components/OtherForecast';
import Search from '@/components/Search';
import Today from '@/components/Today';

export default function DashboardUI() {

  return (
    <div className='md:mt-5 md:flex md:justify-between md:items-start'>
      <Search />
      <div className='grid justify-between grid-rows-2 mt-5 gap-5 md:flex md:flex-col md:w-[44vw] md:mt-0'>
        <Today />
        <div className='grid grid-cols-2 gap-2'>
          <OtherForecast />
          <OtherForecast />
        </div>
      </div>

      {/* <WeatherForecast /> */}
    </div>
  );
}
