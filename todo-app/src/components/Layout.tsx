import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <div className='grid grid-cols-5'>
        <div className='col-span-1 bg-red-100 h-screen'>Sidebar</div>
        <div className='col-span-4'>
          <Outlet />
        </div>
      </div>
    </>
  );
}
