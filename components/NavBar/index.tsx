import React from 'react';

import styles from '../../styles';
import MenuIcon from '../MenuIcon';
import SearchBar from '../SearchBar';

type NavbarProps = {};

const Navbar = (props: NavbarProps) => {
  return (
    <section className={`${styles.xPaddings} py-5 relative  `}>
      <div className="w-1/2 flex flex-row items-center  md:justify-between">
        <img
          src="/icon/logo.svg"
          className="object-contain w-[105px] h-[48px] md:w-[160px] md:h-[70px]"
        />
        <div className="hidden md:block">
          <SearchBar />
        </div>
      </div>
      <div className="flex w-1/2 items-center justify-around flex-row">
        <div className="md:flex hidden md:w-1/2 md:block flex-row items-center">
          <div className="px-2">
            <MenuIcon count={0} />
          </div>
          <div>
            <div>
              <p className="font-bold">+38 (067) 115 00 58</p>
            </div>
            <div>
              <p className="text-jingga font-bold">Test</p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 w-full flex justify-between  md:pl-12 sm:pl-16 pl-8  md:justify-around w-full items-center">
          <div className="hidden md:block">
            <MenuIcon count={0} />
          </div>
          <div className="">
            <MenuIcon count={1} />
          </div>
          <div className=" p-2">
            <MenuIcon count={2} />
          </div>
          <p className="text-black text-[12px] md:text-[16px] font-extrabold">
            20.000.000 IDR
          </p>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
