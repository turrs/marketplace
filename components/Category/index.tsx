import { useRouter } from 'next/router';
import React from 'react';
import { useAppDispatch } from '../../states';
import { asyncSetCategoryProduct } from '../../states/Product/action';

type CategoryProps = {
  item: string;
};

const Category = ({ item }: CategoryProps) => {
  const dispatch = useAppDispatch();
  const route = useRouter();
  const HandleFilter = (item: any) => {
    dispatch(asyncSetCategoryProduct(item));
    route.push('/catalog');
  };
  return (
    <div
      onClick={() => HandleFilter(item)}
      className="flex hover:cursor-pointer flex-row px-10  h-[40px] items-center justify-center border-solid border-green border-2 rounded-[24px]"
    >
      <div className="px-4">
        <img src="/icon/seeds2.svg" className="w-[24px] h-[24px] " />
      </div>
      <div className="2">
        <p className="font-bold">{item}</p>
      </div>
    </div>
  );
};

export default Category;
