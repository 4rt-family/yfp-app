import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

import AddSVG from "./images/add.url.svg";
import RefreshSVG from "./images/refresh.url.svg";

import { usePromiseTracker } from "react-promise-tracker";

const Header = ({ setRandomPost }) => {
  const { promiseInProgress } = usePromiseTracker();

  return (
    <header className="container pt-18 pb-5 text-center">
      <h1 className="mx-auto w-80 break-words text-xl font-bold uppercase leading-11">
        You favorite pasta
      </h1>

      <div className="pt-10 grid grid-cols-3">
        <div className="my-auto col-start-2">
          <button type="button" onClick={setRandomPost}>
            <Image className={promiseInProgress ? "spinner-border animate-spin" : null} src={RefreshSVG} width={30}
                   height={30} />
            <span className="text-10 ml-4 align-super uppercase">Другая паста</span>
          </button>
        </div>
        <div className="ml-auto">
          <Image src={AddSVG} width={70} height={70} />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  setRandomPost: PropTypes.func.isRequired
};

export default Header;
