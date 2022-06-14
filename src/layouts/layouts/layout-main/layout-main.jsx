import PropTypes from 'prop-types';
import React from 'react';

import Footer from 'components/shared/footer';
import Header from 'components/shared/header';
import Seo from 'components/shared/seo';

const LayoutMain = ({ setRandomPost, children }) => (
  <>
    <Header setRandomPost={setRandomPost} />
    <Seo />
    <main>{children}</main>
    <Footer telegram="хуй а не тг" />
  </>
);
LayoutMain.propTypes = {
  setRandomPost: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default LayoutMain;
