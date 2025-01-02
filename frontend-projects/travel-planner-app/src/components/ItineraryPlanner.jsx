import Button from './Button';

export default function ItineraryPlanner({
  itineraryInformation,
  onEdit,
  onSave,
  onDelete,
}) {
  return (
    <div className='flex flex-col items-center gap-5'>
      <h1 className='text-white text-5xl font-extrabold p-5 text-center'>
        Visit to {itineraryInformation?.city} City!
      </h1>
      <div className='text-center text-white text-3xl p-5 border-2 border-white rounded-md bg-slate-400 bg-opacity-50 font-semibold'>
        <p>FlightDate: {itineraryInformation?.flightDate}</p>
        <p>Flight Time: {itineraryInformation?.flightTime} hrs</p>
        <p>
          Air Fare: {itineraryInformation?.airFare}{' '}
          {itineraryInformation?.currency}
        </p>
        <p>
          Explore {itineraryInformation?.attractionToVisit} in{' '}
          {itineraryInformation?.city} city!
        </p>
      </div>
      <div className='gap-5 mt-5 flex'>
        <Button
          onClick={onEdit}
          className={
            'text-white text-xl font-semibold bg-stone-500 p-2 rounded-md hover:text-slate-300 hover:cursor-pointer transition ease-in-out duration-200 active:scale-95'
          }>
          EDIT
        </Button>

        <Button
          onClick={onDelete}
          className={
            'text-white text-xl font-semibold bg-red-600 p-2 rounded-md hover:text-slate-300 hover:cursor-pointer transition ease-in-out duration-200 active:scale-95'
          }>
          DELETE
        </Button>
        <Button
          onClick={onSave}
          className={
            'text-white text-xl font-semibold bg-green-400 p-2 rounded-md hover:text-slate-300 hover:cursor-pointer transition ease-in-out duration-200 active:scale-95'
          }>
          SAVE
        </Button>
      </div>
    </div>
  );
}
