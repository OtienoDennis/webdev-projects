export default function ErrorComponent({ errortext }) {
  return (
    <div className='text-2xl text-red-600 font-extrabold text-center'>
      {errortext}!!
    </div>
  );
}
