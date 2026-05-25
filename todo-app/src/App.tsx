import HeaderTitle from './features/todo/components/HeaderTitle';
import FormCreateTodo from './features/todo/components/FormCreateTodo';
import TodoList from './features/todo/components/TodoList';
export default function HomePage() {
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
              <FormCreateTodo />
              <TodoList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
