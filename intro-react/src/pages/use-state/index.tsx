import { useState } from 'react';

export default function UseStatePage() {
  let [counter, setCounter] = useState<number>(0); // 0 -> 1 -> 2
  let [search, setSearch] = useState<string>('');

  const onAddQuantity = () => {
    setCounter(counter + 1);
  };

  const onDecreaseQuantity = () => {
    setCounter(counter - 1);
  };

  //   const onHandleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setSearch(e.target?.value);
  //   }

  return (
    <>
      <div className='p-20 flex items-center gap-3'>
        <button
          onClick={onDecreaseQuantity}
          className='bg-green-400 text-white rounded-md p-1'
        >
          -
        </button>
        <h2>{counter}</h2>
        <button
          onClick={onAddQuantity}
          className='bg-green-400 text-white rounded-md p-1'
        >
          +
        </button>
        <p>{search}</p>
        <input
          type='text'
          placeholder='Type you search'
          className='border border-gray-300 p-2 rounded-md'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
        />
      </div>
    </>
  );
}
