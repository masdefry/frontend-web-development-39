import type { InputCreateTodo } from '../types/todo-type';

type FormCreateTodoProps = {
  onCreateTodo: ({ title, isCompleted }: InputCreateTodo) => void;
  register: any;
  errors: any;
  createTodoLoading: boolean;
  handleSubmit: any;
};
export default function FormCreateTodo(props: FormCreateTodoProps) {
  return (
    <>
      <form onSubmit={props?.handleSubmit(props?.onCreateTodo)}>
        <label className='input w-full mt-10'>
          <input
            type='radio'
            {...props?.register('isCompleted')}
            name='radio-2'
            className='radio radio-xs'
          />
          <input
            type='text'
            {...props?.register('title')}
            className='grow'
            placeholder='index.php'
          />
        </label>
        <p
          className={`text-white text-xs ${props?.errors?.title ? 'bg-red-500' : ''} rounded-full px-3 py-1 w-fit mt-1`}
        >
          {props?.errors?.title && props?.errors?.title?.message}
          {/* {errors?.title? errors?.title?.message : ''} */}
        </p>
        <button
          disabled={props?.createTodoLoading}
          type='submit'
          className={`btn ${props?.createTodoLoading ? 'bg-indigo-100' : 'bg-white'} text-indigo-500 mt-3 w-full`}
        >
          {props?.createTodoLoading ? 'Loading...' : 'Create'}
        </button>
      </form>
    </>
  );
}
