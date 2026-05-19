import Button from '../../components/Button';

export default function ProfilePage() {
  return (
    <>
      <h1 className='mt-10 text-5xl text-red-800 font-bold'>
        Everyone has the right
      </h1>
      <div className='grid grid-cols-5 gap-4 bg-red-100'>
        <div className='bg-yellow-400 w-[150px] h-[150px]'>01</div>
        <div className='bg-yellow-400 w-[150px] h-[150px]'>01</div>
        <div className='bg-yellow-400 w-[150px] h-[150px]'>01</div>
        <div className='bg-yellow-400 w-[150px] h-[150px]'>01</div>
        <div className='bg-yellow-400 w-[150px] h-[150px]'>01</div>
      </div>
      <div className='flex justify-center items-center bg-gray-100'>
        <h1 className='text-red-500'>Hello, World!</h1>
      </div>
    </>
  );
}
