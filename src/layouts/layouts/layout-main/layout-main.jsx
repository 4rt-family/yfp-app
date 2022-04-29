import Header from 'components/shared/header';
import Seo from 'components/shared/seo';

const LayoutMain = ({ children }) => (
  <>
    <Header />
    <Seo />
    <main>{children}</main>
  </>
);

export default LayoutMain;
