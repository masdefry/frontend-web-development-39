import getTodosApi from '../api/getTodosApi';
import type { Todo } from '../types/todo-type';
import { useEffect, useState } from 'react';


export default function useGetTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const onGetTodos = async () => {
    try {
      const todos = await getTodosApi()

      setTodos(todos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onGetTodos();
  }, []);

  return {
    todos,
    onGetTodos
  };
}
