import { IoMoonSharp } from 'react-icons/io5';

export default function HeaderTitle() {
  return (
    <>
      <div className='flex justify-between items-center text-white'>
        <h1 className='tracking-widest text-3xl font-extrabold'>TODO</h1>
        <IoMoonSharp className='text-2xl' />
      </div>
    </>
  );
}
