import type { Todo } from '../types/todo-type';
import ListCard from './ListCard';
import TodoFilter from './TodoFilter';
import { Toaster } from 'react-hot-toast';

type TodoListProps = {
  todos: Todo[];
  confirmationBox: (objectId: string) => void;
};
export default function TodoList({
  todos,
  confirmationBox,
}: TodoListProps) {
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
