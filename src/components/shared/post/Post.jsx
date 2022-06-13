import Image from 'next/image';
import PropTypes from 'prop-types';
import React from 'react';

import Tags from 'components/shared/tags';

import CopyIcon from './images/copy.url.svg';

const copyToClipboard = async (article) => navigator.clipboard.writeText(article);

const Post = ({ title, tags, article }) => (
  <div className="container drop-shadow-[0px 0px 100px rgba(0, 0, 0, 0.05)] rounded-[32px] bg-white px-25 pb-25 md:pb-10 md:px-10 sm:px-5 sm:pb-10">
    <div className="pt-15 text-center">
      <button type="button" onClick={() => copyToClipboard(article)}>
        <Image src={CopyIcon} width={40} height={40} />
      </button>
      <h2 className="text-lg font-bold">{title}</h2>
      <Tags tags={tags} />
    </div>
    <article>{article}</article>
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  article: PropTypes.string.isRequired,
};
export default Post;
