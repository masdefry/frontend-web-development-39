/*
    useEffect   : Untuk meng-handle side effect process. Salah 1 contohnya sering digunakan untuk proses pengambilan data ke API (fetching data). Sering dikenal dengan istilah life cycle method.
*/

import { useEffect, useState } from 'react';

export default function UseEffectPage() {
  useEffect(() => {
    onFetchPosts();
  }, []);

  const [posts, setPosts] = useState<any>([]);
  const onFetchPosts = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET',
      });

      const resJSON = await res.json();

      setPosts(resJSON);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {posts?.map((post) => (
        <div className='card w-96 bg-base-100 card-xs shadow-sm'>
          <div className='card-body'>
            <h2 className='card-title'>{post?.title}</h2>
            <p>{post?.body}</p>
            <div className='justify-end card-actions'>
              <button className='btn btn-primary'>See Post</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
