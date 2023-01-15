import React from 'react';
import { useAppSelector } from '../../states';

import styles from '../../styles';
import MenuIcon from '../MenuIcon';
import SearchBar from '../SearchBar';

type NavbarProps = {};

const Navbar = (props: NavbarProps) => {
  const cart = useAppSelector((state) => state.cart);
  const user = useAppSelector((state) => state.usersLogin);
  return (
    <section className={`${styles.xPaddings} py-5 relative  `}>
      <div className="w-1/2 flex flex-row items-center  md:justify-between">
        <img
          src="/icon/logo.png"
          className="object-contain w-[105px] h-[48px] md:w-[300px] md:h-[70px]"
        />
        <div className="hidden md:block">
          <SearchBar />
        </div>
      </div>
      <div className="flex w-1/2 items-center justify-around flex-row">
        <div className="md:flex hidden md:w-1/2 md:block flex-row items-center">
          <div className="px-2">
            <img src="/icon/cs.svg" />
          </div>
          <div>
            <div>
              <p className="font-bold">+6285156112606</p>
            </div>
            <div>
              <p className="text-jingga font-bold">Fatur Rahman</p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 w-full flex justify-between  md:pl-12 sm:pl-16 pl-8  md:justify-around w-full items-center">
          {user.id !== undefined && (
            <>
              <div className="hidden md:block">
                <MenuIcon count={cart.length} />
              </div>
              <p className="text-black text-[12px] md:text-[16px] font-extrabold">
                20.000.000 IDR
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
