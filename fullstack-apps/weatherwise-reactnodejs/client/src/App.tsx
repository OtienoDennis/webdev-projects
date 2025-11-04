import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';

function App() {
  return (
    <div className='bg-[#BFD7FF] h-screen p-3 md:px-10'>
    <h1 className='font-bold text-xl md:text-3xl text-center p-2'>Weather Wise App</h1>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
