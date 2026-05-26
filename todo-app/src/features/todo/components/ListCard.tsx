import { MdOutlineClose } from 'react-icons/md';
import type { Todo } from '../types/todo-type';

export default function ListCard(props: Pick<Todo, 'title' | 'isCompleted'>) {
  return (
    <>
      <li className='flex justify-between items-center p-3 border-b-2'>
        <div className='flex items-center gap-3'>
          <input type='radio' name='radio-2' className='radio radio-xs' />
          <div>
            {props?.isCompleted ? <del>{props?.title}</del> : `${props?.title}`}
          </div>
        </div>
        <MdOutlineClose />
      </li>
    </>
  );
}
