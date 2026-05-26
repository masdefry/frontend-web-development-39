import ListCard from './ListCard';
import TodoFilter from './TodoFilter';
import useGetTodos from '../hooks/useGetTodos';
import { Toaster } from 'react-hot-toast';
import useDeleteTodo from '../hooks/useDeleteTodo';
export default function TodoList() {
  const { todos, onGetTodos } = useGetTodos();
  const { confirmationBox } = useDeleteTodo(onGetTodos);

  return (
    <>
      <Toaster />
      <ul className='list bg-base-100 rounded-sm shadow-md mt-3'>
        {todos?.map((todo) => (
          <ListCard
            key={todo?.objectId}
            title={todo?.title}
            isCompleted={todo?.isCompleted}
            objectId={todo?.objectId}
            confirmationBox={confirmationBox}
          />
        ))}
        <TodoFilter />
      </ul>
    </>
  );
}
