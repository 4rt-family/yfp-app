import { useState } from 'react';
import { trackPromise } from 'react-promise-tracker';

function useRandomPost() {
  const [post, setPost] = useState({
    article: '',
    title: '',
    tags: [],
  });

  const setRandomPost = async () => {
    const request = await trackPromise(fetch('/api/pasta', { method: 'POST' }));
    const {
      data: { Title, Content, Tags },
    } = await request.json();

    setPost({
      title: Title,
      article: Content,
      tags: Tags || [],
    });
  };

  return [post, setRandomPost];
}

export default useRandomPost;
