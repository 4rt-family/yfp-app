import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import React from "react";
import { usePromiseTracker } from "react-promise-tracker";

import AddSVG from "./images/add.url.svg";
import RefreshSVG from "./images/refresh.url.svg";
import Logo from "./images/logo.url.svg";

const Header = ({ setRandomPost }) => {
  const { promiseInProgress } = usePromiseTracker();

  return (
    <header className="container pt-18 pb-5 text-center">
      <Image className="mx-auto" src={Logo} width={298} height={135} alt="logo" />

      <div className="pt-10 grid grid-cols-3 xs:grid-cols-2">
        <div className="my-auto col-start-2 xs:col-start-1">
          <button type="button" onClick={setRandomPost}>
            <Image className={promiseInProgress ? "spinner-border animate-spin" : null} src={RefreshSVG} width={30}
                   height={30} />
            <span className="text-10 font-mono ml-4 align-super uppercase">Другая паста</span>
          </button>
        </div>
        <div className="ml-auto">
          <Link href="/add_article">
            <Image className="cursor-pointer" src={AddSVG} width={70} height={70}></Image>
          </Link>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  setRandomPost: PropTypes.func.isRequired
};

export default Header;
