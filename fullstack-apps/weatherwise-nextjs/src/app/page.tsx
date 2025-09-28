import Logo from '@/components/Logo';
import NavBar from '@/components/NavBar';

export default function Home() {
  return (
    <div className='bg-[#BFD7FF] h-screen p-3'>
      <div className='flex justify-between'>
        <Logo />
        <h1 className='text-xl font-bold md:text-3xl'>Weather Wise App</h1>
        <NavBar />
      </div>
    </div>
  );
}
