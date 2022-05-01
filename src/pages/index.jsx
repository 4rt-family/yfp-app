import React, { useEffect, useState } from 'react';

import LayoutMain from 'layouts/layouts/layout-main';

import Post from '../components/shared/post';

const Home = () => {
  const [data, setData] = useState({
    article: '',
    title: '',
    tags: [],
  });

  function getRandomPasta() {
    return fetch('/api/pasta')
      .then((data) => data.json())
      .then(({ data }) => {
        setData({
          title: data.Title,
          article: data.Content,
          tags: data.Tags ? data.Tags : [],
        });
      });
  }

  useEffect(() => {
    getRandomPasta();
  }, []);

  return (
    <LayoutMain>
      <Post title={data.title} article={data.article} tags={data.tags} />
    </LayoutMain>
  );
};

export default Home;
