import HeaderTitle from './features/todo/components/HeaderTitle';
import FormCreateTodo from './features/todo/components/FormCreateTodo';
import TodoList from './features/todo/components/TodoList';
import useCreateTodo from './features/todo/hooks/useCreateTodo';
import useGetTodos from './features/todo/hooks/useGetTodos';
import useDeleteTodo from './features/todo/hooks/useDeleteTodo';
export default function HomePage() {
  const { todos, onGetTodos } = useGetTodos();
  const { onCreateTodo, register, errors, createTodoLoading, handleSubmit } =
    useCreateTodo(onGetTodos);
  const { confirmationBox } = useDeleteTodo(onGetTodos);

  return (
    <>
      <div className='w-screen h-screen bg-gray-200'>
        <div className='relative'>
          <div className="bg-[url('/images/background-banner.png')] bg-center h-50">
            <div className='bg-linear-to-br from-indigo-500/70 via-purple-500/70 to-pink-500/10 h-50'></div>
          </div>
          <div className='absolute top-10 w-screen flex justify-center'>
            <div className='w-72 md:w-96'>
              <HeaderTitle />
              <FormCreateTodo
                onCreateTodo={onCreateTodo}
                register={register}
                errors={errors}
                createTodoLoading={createTodoLoading}
                handleSubmit={handleSubmit}
              />
              <TodoList todos={todos} confirmationBox={confirmationBox} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
