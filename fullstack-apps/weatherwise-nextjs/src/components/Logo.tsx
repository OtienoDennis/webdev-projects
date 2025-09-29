import Image from 'next/image';

function Logo() {
  return (
    <div className='md:flex gap-2 items-center'>
      <Image
        width={50}
        height={50}
        src='/logo.jpeg'
        alt=''
        className='rounded-sm'
        style={{ width: '60px', height: '60px', objectFit: 'cover' }}></Image>
      <p className=' mt-2 '>
        Welcome, <span className='text-xl font-semibold md:text-2xl'>Dennis!</span>
      </p>
    </div>
  );
}

export default Logo;
