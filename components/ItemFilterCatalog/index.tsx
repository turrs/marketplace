import React from 'react';
import { useAppDispatch, useAppSelector } from '../../states';
import { asyncSetCategoryProduct } from '../../states/Product/action';

type ItemFilterCatalogProps = {};

const ItemFilterCatalog = (active: ItemFilterCatalogProps) => {
  const data = useAppSelector((state) => state.category);
  const dispatch = useAppDispatch();
  const handleFilter = (item: any) => {
    dispatch(asyncSetCategoryProduct(item));
  };
  return (
    <div className="flex flex-col shadow-[0_3px_10px_rgb(0,0,0,0.2)] items-center justify-center bg-white rounded-[24px] w-full py-3 px-6">
      {data.map((item: any, index: number) => (
        <div
          onClick={() => handleFilter(item)}
          key={index}
          className="flex flex-row py-3 justify-between w-full"
        >
          <p
            className={`${
              item.active ? 'text-green font-extrabold' : 'text-jingga'
            } text-base hover:underline hover:cursor-pointer`}
          >
            {item}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ItemFilterCatalog;
