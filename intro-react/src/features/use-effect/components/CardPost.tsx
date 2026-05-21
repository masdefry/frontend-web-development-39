import type { Posts } from "@/pages/use-effect";

// type CardPostProps = {
//     title: string; 
//     body: string; 
// }
export default function CardPost(props: Pick<Posts, 'body' | 'title'>) {
  return (
    <div className='card w-96 bg-base-100 card-xs shadow-sm'>
      <div className='card-body'>
        <h2 className='card-title'>{props?.title}</h2>
        <p>{props?.body}</p>
        <div className='justify-end card-actions'>
          <button className='btn btn-primary'>See Post</button>
        </div>
      </div>
    </div>
  );
}
