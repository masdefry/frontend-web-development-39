import { MdOutlineClose } from 'react-icons/md';
import type { Todo } from '../types/todo-type';

type ListCardProps = Pick<Todo, 'title' | 'isCompleted' | 'objectId'> & {
  onDeleteTodo: (objectId: string) => void;
  confirmationBox: (objectId: string) => void;
};
export default function ListCard(props: ListCardProps) {
  return (
    <>
      <li className='flex justify-between items-center p-3 border-b-2'>
        <div className='flex items-center gap-3'>
          <input type='radio' name='radio-2' className='radio radio-xs' />
          <div>
            {props?.isCompleted ? <del>{props?.title}</del> : `${props?.title}`}
          </div>
        </div>
        <MdOutlineClose onClick={() => props?.confirmationBox(props?.objectId)} />
      </li>
    </>
  );
}
