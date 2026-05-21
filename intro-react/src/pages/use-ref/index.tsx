/*
    useRef  : Untuk mengakses/memanipulasi DOM. Real case nya, useRef sering diperuntukan untuk menyimpan value dari element input
*/
import { useRef } from 'react';

export default function UseRefPage() {
  const inputEmail = useRef<HTMLInputElement>(null);
  const inputPassword = useRef<HTMLInputElement>(null);

  const onSaveData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputEmail.current?.value);
    console.log(inputPassword.current?.value);
  };

  return (
    <>
      <form onSubmit={onSaveData} className='p-20'>
        <input
          ref={inputEmail}
          type='text'
          placeholder='Type your email'
          className='border border-gray-300'
        />
        <input
          ref={inputPassword}
          type='password'
          placeholder='Type your password'
          className='border border-gray-300'
        />
        {/* <button type='button' className='bg-indigo-400 p-1 rounded-md ml-3'>
          Add New Data
        </button> */}

        <button type='submit' className='bg-indigo-400 p-1 rounded-md ml-3'>
          Submit
        </button>
      </form>
    </>
  );
}
