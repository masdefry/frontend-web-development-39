import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { Toaster } from 'react-hot-toast';

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <Toaster />
      {/* <div className='grid grid-cols-5'>
        <div className='col-span-1 bg-red-100 h-screen'>Sidebar</div>
        <div className='col-span-4'>
          <Outlet />
        </div>
      </div> */}
      <Outlet />
    </>
  );
}
