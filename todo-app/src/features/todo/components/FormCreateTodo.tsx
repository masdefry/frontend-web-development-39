import { useForm } from 'react-hook-form';
import type { InputCreateTodo, Todo } from '../types/todo-type';
import { zodResolver } from '@hookform/resolvers/zod';
import { createTodoSchema } from '../schemas/createTodoSchema';
import axiosInstance from '@/utils/axios-instance';
import { AxiosError, type AxiosResponse } from 'axios';
import { useState } from 'react';

export default function FormCreateTodo() {
  const [createTodoLoading, setCreateTodoLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputCreateTodo>({
    resolver: zodResolver(createTodoSchema),
    defaultValues: {
      isCompleted: false,
    },
  });

  const onCreateTodo = async ({ title, isCompleted }: InputCreateTodo) => {
    try {
      setCreateTodoLoading(true);

      const res: AxiosResponse<Todo, InputCreateTodo> =
        await axiosInstance.post('data/Todos', {
          title,
          isCompleted,
        });

      alert(`Create todo: ${res?.data?.title} is successfull`);
    } catch (error) {
      if (error instanceof AxiosError) alert(error?.response?.data?.message);
    } finally {
      setCreateTodoLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onCreateTodo)}>
        <label className='input w-full mt-10'>
          <input
            type='radio'
            {...register('isCompleted')}
            name='radio-2'
            className='radio radio-xs'
          />
          <input
            type='text'
            {...register('title')}
            className='grow'
            placeholder='index.php'
          />
        </label>
        <p className='text-white font-bold text-xs'>
          {errors?.title && errors?.title?.message}
          {/* {errors?.title? errors?.title?.message : ''} */}
        </p>
        <button
          disabled={createTodoLoading}
          type='submit'
          className={`btn ${createTodoLoading? 'bg-indigo-100':'bg-white'} text-indigo-500 mt-3 w-full`}
        >
          {createTodoLoading? 'Loading...' : 'Create'}
        </button>
      </form>
    </>
  );
}
