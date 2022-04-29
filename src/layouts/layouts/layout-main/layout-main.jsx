import Seo from 'components/shared/seo';
import Header from 'components/shared/header';

const LayoutMain = ({ children }) => (
  <>
    <Header />
    <Seo />
    <main>{children}</main>
  </>
);

export default LayoutMain;
