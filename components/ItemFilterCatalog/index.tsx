import React from 'react';
import { useAppSelector } from '../../states';

type ItemFilterCatalogProps = {};

const ItemFilterCatalog = (active: ItemFilterCatalogProps) => {
  const data = useAppSelector((state) => state.category);
  return (
    <div className="flex flex-col shadow-[0_3px_10px_rgb(0,0,0,0.2)] items-center justify-center bg-white rounded-[24px] w-full py-3 px-6">
      {data.map((item: any, index: number) => (
        <div key={index} className="flex flex-row py-3 justify-between w-full">
          <p
            className={`${
              item.active ? 'text-green font-extrabold' : 'text-jingga'
            } text-base`}
          >
            {item}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ItemFilterCatalog;
