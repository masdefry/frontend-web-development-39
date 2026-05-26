import useCreateTodo from "../hooks/useCreateTodo";

export default function FormCreateTodo() {
  const {
    onCreateTodo, 
    register, 
    errors, 
    createTodoLoading, 
    handleSubmit
  } = useCreateTodo()

  return (
    <>
      <form onSubmit={handleSubmit(onCreateTodo)}>
        <label className='input w-full mt-10'>
          <input
            type='radio'
            {...register('isCompleted')}
            name='radio-2'
            className='radio radio-xs'
          />
          <input
            type='text'
            {...register('title')}
            className='grow'
            placeholder='index.php'
          />
        </label>
        <p className='text-white font-bold text-xs'>
          {errors?.title && errors?.title?.message}
          {/* {errors?.title? errors?.title?.message : ''} */}
        </p>
        <button
          disabled={createTodoLoading}
          type='submit'
          className={`btn ${createTodoLoading? 'bg-indigo-100':'bg-white'} text-indigo-500 mt-3 w-full`}
        >
          {createTodoLoading? 'Loading...' : 'Create'}
        </button>
      </form>
    </>
  );
}
