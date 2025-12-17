export default function Today() {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const currentDay = `${year}-${month}-${day}`;
  console.log(currentDay);
  return (
    <div className='rounded-lg bg-[#F0F8FF] md:h-[40vh] p-2'>
      <p>Day:</p>
      <p>Temperature: </p>
      <p>Condition:</p>
      <p>Weather Icon:</p>
      <p>Humidity:</p>
    </div>
  );
}


