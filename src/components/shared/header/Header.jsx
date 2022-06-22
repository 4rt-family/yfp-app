import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
import { usePromiseTracker } from 'react-promise-tracker';

import AddSVG from './images/add.url.svg';
import Logo from './images/logo.url.svg';
import RefreshSVG from './images/refresh.url.svg';

const Header = ({ setRandomPost }) => {
  const { promiseInProgress } = usePromiseTracker();

  return (
    <header className="container pt-18 pb-5 text-center">
      <Image className="mx-auto" src={Logo} width={298} height={135} alt="logo" />

      <div className="grid grid-cols-3 pt-10 xs:grid-cols-2">
        <div className="col-start-2 my-auto xs:col-start-1">
          <button type="button" onClick={setRandomPost}>
            <Image
              className={promiseInProgress ? 'animate-reverse-spin' : null}
              src={RefreshSVG}
              width={30}
              height={30}
            />
            <span className="text-10 ml-4 align-super font-mono uppercase">Другая паста</span>
          </button>
        </div>
        <div className="ml-auto">
          <Link href="/add_article">
            <Image className="cursor-pointer" src={AddSVG} width={70} height={70} />
          </Link>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  setRandomPost: PropTypes.func.isRequired,
};

export default Header;
