import PropTypes from 'prop-types';

const Tags = ({ tags }) => (
  <div className="flex justify-center py-2.5">
    {tags.length > 0 &&
      tags.map((text) => (
        <div className="m-1.5 rounded-[50px] bg-gray px-2 py-1.5 text-sm">{text}</div>
      ))}
  </div>
);

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};
Tags.defaultProps = {
  tags: null,
};
export default Tags;
