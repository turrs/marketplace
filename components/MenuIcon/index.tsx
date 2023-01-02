import React, { ReactNode } from 'react';

type MenuIconProps = {
  count: any;
};

const MenuIcon = ({ count }: MenuIconProps) => {
  return (
    <div className="hover:cursor-pointer relative   flex justify-center items-center w-[40px] h-[40px]  rounded-full border-[1px] border-solid border-orange">
      {count !== 0 && (
        <div className="absolute top-0 right-0 w-[14px] h-[14px] flex justify-center items-center -mt-1 bg-jingga rounded-full">
          <p className="text-[12px] text-white">{count}</p>
        </div>
      )}
      <img src="/icon/iconexample.svg" />
    </div>
  );
};

export default MenuIcon;
