import { useState } from "react";
import { trackPromise } from "react-promise-tracker";

function useRandomPost() {
  const [post, setPost] = useState({
    article: "",
    title: "",
    tags: []
  });

  const getRandomPost = async () => {
    const request = await trackPromise(fetch("/api/pasta"));
    const { data } = await request.json();

    return {
      title: data.Title,
      article: data.Content,
      tags: data.Tags ? data.Tags : []
    };
  };

  const setRandomPost = async () => setPost(await getRandomPost());

  return [post, setRandomPost];
}

export default useRandomPost;
