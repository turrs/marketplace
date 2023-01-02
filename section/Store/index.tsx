import React from 'react';
import FilterSource from '../../components/FilterSource';
import Item from '../../components/Item';
import ItemFilterCatalog from '../../components/ItemFilterCatalog';
import styles from '../../styles';
import itemJson from '../../constant/itemFilter.json';
type StoreProps = {};

const Store = (props: StoreProps) => {
  return (
    <div className={`${styles.xPaddings} w-full `}>
      <div className="flex w-full ">
        <div className="hidden md:block md:py-5   w-[33.33%]">
          <ItemFilterCatalog />
          <div className="py-5" />
          <FilterSource />
        </div>
        <div className="flex w-full flex-wrap  ">
          {itemJson.map((item) => (
            <div className=" sm:w-full w-full xs:w-[50%] md:pl-6 pt-5 md:w-[50%] lg:w-[33.33%]   ">
              <Item active={item.active} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Store;
