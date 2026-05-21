import style from './App.module.css';
import { Button } from '@/components/ui/button';
import { AiTwotoneLike } from 'react-icons/ai';
import { CiHeart } from 'react-icons/ci';
import toast, { Toaster } from 'react-hot-toast';
export default function HomePage() {
  const onToaster = () => {
    toast.success('Success');
    toast.error('Error');
    toast.loading('Loading');
  };

  return (
    <>
      <Toaster />
      <h1 style={{ color: 'black', backgroundColor: 'green' }}>Purwadhika</h1>
      <h2>Purwadhika</h2>
      <span>Hello World</span>
      <button id={style.button} className={`${style.bebas} ${style.custom}`}>
        Submit
      </button>
      <div className='card bg-base-100 w-96 shadow-sm'>
        <figure>
          <img
            src='https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp'
            alt='Shoes'
          />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>Card Title</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className='card-actions justify-end'>
            <button className='btn btn-primary'>Buy Now</button>
          </div>
        </div>
      </div>

      <Button onClick={onToaster} className={'bg-red-500 cursor-pointer ml-10'}>
        <AiTwotoneLike className='text-red-900 text-5xl' /> Click Me!
      </Button>

      <CiHeart className='text-7xl text-yellow-600' />
    </>
  );
}
