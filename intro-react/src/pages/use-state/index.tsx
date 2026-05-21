import { useState } from 'react';

export default function UseStatePage() {
  let [counter, setCounter] = useState<number>(0); // 0 -> 1 -> 2

  const onAddQuantity = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <div className='p-20 flex items-center gap-3'>
        <button className='bg-green-400 text-white rounded-md p-1'>-</button>
        <h2>{counter}</h2>
        <button
          onClick={onAddQuantity}
          className='bg-green-400 text-white rounded-md p-1'
        >
          +
        </button>
      </div>
    </>
  );
}
