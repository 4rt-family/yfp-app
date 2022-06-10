import PropTypes from 'prop-types';

const Footer = ({ telegram }) => (
  <footer className="py-15 text-center text-sm underline">
    <a href={telegram}>Написать нам в телеграм</a>
  </footer>
);

Footer.propTypes = {
  telegram: PropTypes.string.isRequired,
};
Footer.defaultProps = {
  telegram: '',
};

export default Footer;
