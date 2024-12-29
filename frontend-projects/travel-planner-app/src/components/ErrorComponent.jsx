export default function ErrorComponent({ errortext }) {
  return (
    <div className='text-2xl text-white font-extrabold text-center'>
      {errortext}
    </div>
  );
}
