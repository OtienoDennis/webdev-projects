interface advertInformation {
  description: string;
  eventHappening: string;
  instruction: string;
  headline: string
}

export default function Advert({description,eventHappening, instruction, headline }: advertInformation) {
   const date = new Date();
   const day = date.getDate();
   const month = date.getMonth();
   const year = date.getFullYear();
   const currentDay = `${year}-${month}-${day}`;
  return (
    <div className='hidden md:block md:w-[20%] h-[65.5vh] rounded-lg bg-[#dff0ff] p-2 md:absolute md:top-[230px]'>
      <p>Day: {currentDay}</p>
      <p>Description: {description}</p>
      <p>Event: {eventHappening}</p>
      <p>Instruction: {instruction} </p>
      <p>Headline: {headline}</p>
    </div>
  );
}
