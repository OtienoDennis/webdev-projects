import OtherForecast from '@/components/OtherForecast';
import Search from '@/components/Search';
import Today from '@/components/Today';

export default function DashboardUI() {
  return (
    <div className='mt-5 md:flex md:justify-between md:items-start'>
      <Search />
      <div className='grid grid-cols-2 mt-5 w-[85vw] gap-1 md:flex md:flex-col md:w-[50vw] md:mt-0'>
        <Today />
        <div className='grid grid-cols-2 gap-3 md:mt-5'>
          <OtherForecast />
          <OtherForecast />
          <OtherForecast />
          <OtherForecast />
          <OtherForecast />
          <OtherForecast />
        </div>
      </div>

      {/* <WeatherForecast /> */}
    </div>
  );
}

// md:flex md:flex-col
