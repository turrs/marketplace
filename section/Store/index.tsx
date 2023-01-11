import React, { useEffect } from 'react';
import FilterSource from '../../components/FilterSource';
import Item from '../../components/Item';
import ItemFilterCatalog from '../../components/ItemFilterCatalog';
import styles from '../../styles';
import itemJson from '../../constant/itemFilter.json';
import { useAppDispatch, useAppSelector } from '../../states';
import { asyncSetAllProduct } from '../../states/Product/action';
type StoreProps = {};

const Store = (props: StoreProps) => {
  const dispatch = useAppDispatch();
  const getProductData = async () => {
    dispatch(asyncSetAllProduct());
  };
  const dataProduct = useAppSelector((state) => state.product);
  console.log(55, dataProduct);

  useEffect(() => {
    getProductData();
  }, []);
  return (
    <div className={`${styles.xPaddings} w-full `}>
      <div className="flex w-full ">
        <div className="hidden md:block md:py-5   w-[33.33%]">
          <ItemFilterCatalog />
          <div className="py-5" />
          <FilterSource />
        </div>
        <div className="flex w-full flex-wrap  ">
          {dataProduct.map((item: any) => (
            <div
              key={item.id}
              className=" sm:w-full w-full xs:w-[50%] md:pl-6 pt-5 md:w-[50%] lg:w-[33.33%]  "
            >
              <Item active={item.active} data={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Store;
