import React from 'react';
import itemJson from '../../constant/itemFilter.json';

type ItemFilterCatalogProps = {};

const ItemFilterCatalog = (active: ItemFilterCatalogProps) => {
  return (
    <div className="flex flex-col drop-shadow-lg items-center justify-center bg-white rounded-[24px] w-full py-3 px-6">
      {itemJson.map((item) => (
        <div
          key={item.title}
          className="flex flex-row py-3 justify-between w-full"
        >
          <p
            className={`${
              item.active ? 'text-green font-extrabold' : 'text-gray'
            } text-base`}
          >
            {item.title}
          </p>
          <p className="text-orange">({item.count})</p>
        </div>
      ))}
    </div>
  );
};

export default ItemFilterCatalog;
