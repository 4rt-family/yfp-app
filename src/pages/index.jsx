/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect } from "react";

import Post from "components/shared/post";
import useRandomPost from "components/shared/post/useRandomPost";
import LayoutMain from "layouts/layouts/layout-main";

const Home = () => {
  const [post, setRandomPost] = useRandomPost();

  useEffect(() => {
    setRandomPost();
  }, []);

  return (
      <LayoutMain setRandomPost={setRandomPost}>
        <Post title={post.title} article={post.article} tags={post.tags} />
      </LayoutMain>
  );
};

export default Home;
