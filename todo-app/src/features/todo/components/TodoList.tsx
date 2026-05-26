import axiosInstance from '@/utils/axios-instance';
import ListCard from './ListCard';
import TodoFilter from './TodoFilter';
import type { AxiosResponse } from 'axios';
import type { Todo } from '../types/todo-type';
import { useEffect, useState } from 'react';

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const onGetTodos = async () => {
    try {
      const res: AxiosResponse<Todo[]> = await axiosInstance.get('data/Todos');

      setTodos(res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onGetTodos();
  }, []);

  return (
    <>
      <ul className='list bg-base-100 rounded-sm shadow-md mt-3'>
        {todos?.map((todo) => (
          <ListCard
            key={todo?.objectId}
            title={todo?.title}
            isCompleted={todo?.isCompleted}
          />
        ))}
        <TodoFilter />
      </ul>
    </>
  );
}
