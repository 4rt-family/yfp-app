import { useState } from 'react';

function useRandomPost() {
  const [post, setPost] = useState({
    article: '',
    title: '',
    tags: [],
  });

  const getRandomPost = async () => {
    const request = await fetch('/api/pasta');
    const { data } = await request.json();

    return {
      title: data.Title,
      article: data.Content,
      tags: data.Tags ? data.Tags : [],
    };
  };

  const setRandomPost = async () => setPost(await getRandomPost());

  return [post, setRandomPost];
}

export default useRandomPost;
