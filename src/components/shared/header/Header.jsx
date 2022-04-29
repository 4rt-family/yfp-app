import React from "react";

import RefreshSVG from './images/refresh.url.svg';
import AddSVG from './images/add.url.svg';

import Image from "next/image";



const Header = () => (
  <header className='container text-center pt-[70px]'>
    <h1 className='uppercase font-bold text-xl mx-auto leading-[2.7rem] break-words w-80'>You favorite pasta</h1>
    <div className='flex pt-[40px]'>
      <div className='flex-1 my-auto'>
        <Image className='' src={RefreshSVG} width={30} height={30} />
        <span className='ml-[20px] align-super text-[20px] uppercase'>Другая паста</span>
      </div>
      <Image className='' src={AddSVG} width={70} height={70} />

    </div>
  </header>
);

export default Header;