import PropTypes from 'prop-types';

import Footer from 'components/shared/footer';
import Header from 'components/shared/header';
import Seo from 'components/shared/seo';

const LayoutMain = ({ children }) => (
  <>
    <Header />
    <Seo />
    <main>{children}</main>
    <Footer />
  </>
);
LayoutMain.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutMain;
