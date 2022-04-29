import PropTypes from 'prop-types';

const Tags = ({ tags }) => (
  <div className="flex justify-center py-[10px]">
    {tags &
      tags.map((text) => (
        <div className="m-[5px] rounded-[50px] bg-gray px-[8px] py-[5px] text-sm">{text}</div>
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
