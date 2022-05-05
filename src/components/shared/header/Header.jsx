import Image from 'next/image';
import React from 'react';

import AddSVG from './images/add.url.svg';
import RefreshSVG from './images/refresh.url.svg';

const Header = () => (
  <header className="container pt-18 pb-5 text-center">
    <h1 className="mx-auto w-80 break-words text-xl font-bold uppercase leading-11">
      You favorite pasta
    </h1>
    <div className="flex pt-10">
      <div className="my-auto flex-1">
        <Image src={RefreshSVG} width={30} height={30} />
        <span className="text-5 ml-5 align-super uppercase">Другая паста</span>
      </div>
      <Image src={AddSVG} width={70} height={70} />
    </div>
  </header>
);

export default Header;
