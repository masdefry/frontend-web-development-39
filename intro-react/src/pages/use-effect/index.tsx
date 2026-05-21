/*
    useEffect   : Untuk meng-handle side effect process. Salah 1 contohnya sering digunakan untuk proses pengambilan data ke API (fetching data). Sering dikenal dengan istilah life cycle method.
*/

import CardPost from '@/features/use-effect/components/CardPost';
import { useEffect, useState } from 'react';

export type Posts = {
    userId: number; 
    id: number; 
    title: string; 
    body: string; 
}

export default function UseEffectPage() {
  useEffect(() => {
    onFetchPosts();
  }, []);

  const [posts, setPosts] = useState<Posts[]>([]);
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
      {posts?.map((post: Posts) => (
        <CardPost 
          key={post?.id}
          title={post?.title}
          body={post?.body}
        />
      ))}
    </>
  );
}
