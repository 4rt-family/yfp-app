import PropTypes from 'prop-types';
import React from 'react';

const Tags = ({ tags }) => (
  <div className="flex justify-center py-2.5">
    {tags.length > 0 &&
      tags.map((text, index) => (
        <div className="m-1.5 rounded-[50px] bg-gray px-2 py-1.5 text-sm" key={index}>
          {text}
        </div>
      ))}
  </div>
);

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Tags;
