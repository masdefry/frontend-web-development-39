import { MdOutlineClose } from 'react-icons/md';

export default function TodoList() {
  return (
    <>
      <ul className='list bg-base-100 rounded-sm shadow-md mt-3'>
        {/* LISTCARD */}
        <li className='flex justify-between items-center p-3 border-b-2'>
          <div className='flex items-center gap-3'>
            <input type='radio' name='radio-2' className='radio radio-xs' />
            <div>Dio Lupa</div>
          </div>
          <MdOutlineClose />
        </li>
        {/* TODOFILTER */}
        <li className='flex justify-between items-center text-xs text-gray-300 px-3 py-2'>
          <h6>5 Items Left</h6>
          <div className='hidden md:flex items-center gap-3'>
            <h6>All</h6>
            <h6>Active</h6>
            <h6>Completed</h6>
          </div>
          <h6>Clear Completed</h6>
        </li>
      </ul>

      <div className='flex items-center gap-3 md:hidden bg-white mt-3 rounded-sm justify-center p-1 text-gray-300 text-xs'>
        <h6>All</h6>
        <h6>Active</h6>
        <h6>Completed</h6>
      </div>
    </>
  );
}
