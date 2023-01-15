import React, { useState } from 'react';
import styles from '../../styles';
import AddProduct from '../AddProduct';
import Button from '../Button';
import ItemDescription from '../ItemDescription';
import MenuIcon from '../MenuIcon';
import Payment from '../Payment';
type ItemDetailProps = {
  data: any;
};

const ItemDetail = ({ data }: ItemDetailProps) => {
  return (
    <div className={`${styles.xPaddings}`}>
      <div className="flex w-full flex-row flex-wrap ">
        <div className="md:w-[40%] flex justify-center w-full">
          <div className="flex bg-white justify-center w-full rounded-md ">
            <div className="p-6 w-[300px]">
              <img src={data.image} />
            </div>
          </div>
        </div>
        <div className="md:w-[60%] flex flex-row flex-wrap  ">
          <div className="flex md:p-4 flex-row  max-w-[550px] ">
            <div className="md:py-4 ">
              <img src="/icon/iconsection.svg" className="w-[35px]" />
            </div>
            <div className="px-2 ">
              <p className="md:text-[35px] text-[24px] ">{data.title}</p>
            </div>
          </div>
          <div className="flex flex-col  w-full md:pl-14">
            <div className="flex py-4">
              <img src="/icon/arrowstock.svg" />
              <p className="text-green px-2">Stock</p>
            </div>
            <Payment />
            <div className="py-6">
              <hr />
            </div>
          </div>
          <div className="flex w-full flex-col md:flex-row md:items-center">
            <div className="md:w-1/2  flex md:flex-col justify-between  md:pl-14 ">
              <p className="text-jingga font-bold text-xl">{data.price} $USD</p>
              <p>per pcs </p>
            </div>
            <div className="md:w-1/2 flex flex-around   ">
              <div className="md:w-[70%] w-full">
                <div className=" rounded-[24px] md:w-[225px] flex py-2 px-8">
                  <AddProduct />
                </div>
              </div>
              <div className="flex justify-between  ">
                <div className="flex md:pl-10 px-5">
                  <MenuIcon count={0} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full py-12">
          <ItemDescription data={data} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
