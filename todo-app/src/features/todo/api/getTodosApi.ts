import axiosInstance from '@/utils/axios-instance';
import type { AxiosResponse } from 'axios';
import type { Todo } from '../types/todo-type';

export default async function getTodosApi() {
  const res: AxiosResponse<Todo[]> = await axiosInstance.get('data/Todos');

  return res?.data; // [{}, {}, {}]
}
