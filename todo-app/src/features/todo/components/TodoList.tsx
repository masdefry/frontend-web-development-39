import ListCard from './ListCard';
import TodoFilter from './TodoFilter';
import useGetTodos from '../hooks/useGetTodos';

export default function TodoList() {
  const { todos } = useGetTodos();

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
