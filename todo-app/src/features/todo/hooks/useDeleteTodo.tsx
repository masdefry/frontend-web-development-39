import axiosInstance from '@/utils/axios-instance';
import toast from 'react-hot-toast';

export default function useDeleteTodo(onGetTodos: () => void) {
  const onDeleteTodo = async (objectId: string) => {
    try {
      await axiosInstance.delete(`data/Todos/${objectId}`);
      await onGetTodos();

      alert(`Delete todo with id: ${objectId} successful`);
    } catch (error) {
      console.log(error);
    }
  };

  const confirmationBox = (objectId: string) => {
    toast.custom((t) => (
      <div
        className={`${t.visible ? 'animate-enter' : 'animate-leave'} max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className='flex-1 w-0 p-4'>
          <p>Delete this item permanently?</p>
        </div>
        <div className='flex border-l border-gray-200'>
          <button
            onClick={() => {
              // Execute delete logic
              onDeleteTodo(objectId);
            }}
            className='w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-red-600 hover:text-red-500'
          >
            Delete
          </button>
          <button
            onClick={() => toast.dismiss(t.id)}
            className='w-full border border-transparent rounded-none p-4 flex items-center justify-center text-sm font-medium text-gray-600'
          >
            Cancel
          </button>
        </div>
      </div>
    ));
  };

  return {
    confirmationBox,
  };
}
