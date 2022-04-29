import Image from 'next/image';
import React from 'react';

import AddSVG from './images/add.url.svg';
import RefreshSVG from './images/refresh.url.svg';

const Header = () => (
  <header className="container pt-[70px] pb-[20px] text-center">
    <h1 className="mx-auto w-80 break-words text-xl font-bold uppercase leading-[2.7rem]">
      You favorite pasta
    </h1>
    <div className="flex pt-[40px]">
      <div className="my-auto flex-1">
        <Image className="" src={RefreshSVG} width={30} height={30} />
        <span className="ml-[20px] align-super text-[20px] uppercase">Другая паста</span>
      </div>
      <Image className="" src={AddSVG} width={70} height={70} />
    </div>
  </header>
);

export default Header;
