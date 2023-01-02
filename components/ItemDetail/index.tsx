import React, { useState } from 'react';
import styles from '../../styles';
import AddProduct from '../AddProduct';
import Button from '../Button';
import ItemDescription from '../ItemDescription';
import MenuIcon from '../MenuIcon';
import Payment from '../Payment';
type ItemDetailProps = {};

const ItemDetail = (props: ItemDetailProps) => {
  return (
    <div className={`${styles.xPaddings}`}>
      <div className="flex w-full flex-row flex-wrap ">
        <div className="md:w-[40%]">2</div>
        <div className="md:w-[60%] flex flex-row flex-wrap  ">
          <div className="flex md:p-4 flex-row  max-w-[550px] ">
            <div className="md:py-4 ">
              <img src="/icon/iconsection.svg" className="w-[35px]" />
            </div>
            <div className="px-2 ">
              <p className="md:text-[35px] text-[24px] ">
                Гербіцид Комманд®, ФМС УКРАЇНА
              </p>
            </div>
          </div>
          <div className="flex flex-col  w-full md:pl-14">
            <div className="flex py-4">
              <img src="/icon/arrowstock.svg" />
              <p className="text-green px-2">В наявності</p>
            </div>
            <Payment />
            <div className="py-6">
              <hr />
            </div>
          </div>
          <div className="flex w-full flex-col md:flex-row md:items-center">
            <div className="md:w-1/2  flex md:flex-col justify-between  md:pl-14 ">
              <p className="text-jingga font-bold text-xl">7814,63 грн</p>
              <p>Ціна за 5 л </p>
            </div>
            <div className="md:w-1/2 flex flex-around   ">
              <div className="md:w-[70%] w-full">
                <div className="bg-orange rounded-[24px] md:w-[225px] flex py-2 px-8">
                  <AddProduct />
                </div>
              </div>
              <div className="flex justify-between  ">
                <div className="flex md:pl-10 px-5">
                  <MenuIcon count={0} />
                </div>
                <div>
                  <MenuIcon count={0} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full py-12">
          <ItemDescription />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
