import Link from 'next/link';

export default function Contacts() {
  return (
    <div className='flex justify-center gap-10 mt-5 font-bold underline'>
      <ul className='flex justify-between gap-10'>
        <Link
          href='#'
          className='cursor-pointer hover:font-extralight transition-all duration-500 ease-in-out hover:opacity-70'>
          BLOG
        </Link>
        <Link href='#' className='cursor-pointer hover:font-extralight transition-all duration-500 ease-in-out hover:opacity-70'>
          SERVICES
        </Link>
        <Link href='#' className='cursor-pointer hover:font-extralight transition-all duration-500 ease-in-out hover:opacity-70'>
          CONTACTS
        </Link>
      </ul>
    </div>
  );
}
