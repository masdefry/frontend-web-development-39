import axiosInstance from '@/utils/axios-instance';
import { type AxiosResponse } from 'axios';
import type { InputCreateTodo, Todo } from '../types/todo-type';


export default async function createTodoApi({title, isCompleted}: InputCreateTodo) {
  const res: AxiosResponse<Todo, InputCreateTodo> = await axiosInstance.post(
    'data/Todos',
    {
      title,
      isCompleted,
    },
  );

  return res?.data;
}
