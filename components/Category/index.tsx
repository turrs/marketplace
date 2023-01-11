import React from 'react';

type CategoryProps = {};

const Category = (props: CategoryProps) => {
  return (
    <div className="flex flex-row px-10  h-[40px] items-center justify-center border-solid border-green border-2 rounded-[24px]">
      <div className="px-4">
        <img src="/icon/seeds2.svg" className="w-[24px] h-[24px] " />
      </div>
      <div className="2">
        <p className="font-bold">Kategori</p>
      </div>
    </div>
  );
};

export default Category;
