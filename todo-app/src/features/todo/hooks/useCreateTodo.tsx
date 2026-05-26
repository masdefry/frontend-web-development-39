import { useForm } from 'react-hook-form';
import type { InputCreateTodo } from '../types/todo-type';
import { zodResolver } from '@hookform/resolvers/zod';
import { createTodoSchema } from '../schemas/createTodoSchema';
import { AxiosError } from 'axios';
import { useState } from 'react';
import createTodoApi from '../api/createTodoApi';
export default function useCreateTodo() {
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

      const createdTodo = await createTodoApi({title, isCompleted})

      alert(`Create todo: ${createdTodo?.title} is successfull`);
    } catch (error) {
      if (error instanceof AxiosError) alert(error?.response?.data?.message);
    } finally {
      setCreateTodoLoading(false);
    }
  };

  return {
    onCreateTodo, 
    register, 
    errors, 
    createTodoLoading, 
    handleSubmit
  }
}
