import React from 'react';

type ItemProps = {
  active: boolean;
};

const Item = ({ active }: ItemProps) => {
  console.log(22, active);
  return (
    <div className="  flex relative flex-col w-full bg-white rounded-[24px]  ">
      <img src="./icon/iconscales.svg" className="absolute right-0 p-5" />
      <div className="flex justify-center py-16">
        <img src="./icon/item.png" className="w-[100px] " />
      </div>
      <div className="p-2 h-full">
        <div className="bg-background bottom-0 h-full  w-full rounded-[24px]">
          <div className="lg:p-3 p-5 md:p-2 w-full ">
            <div>
              <p className="font-bold">Скор 250 ЕС к.э.</p>
            </div>
            <div>
              <p className="text-green">В наявності</p>
            </div>
            <div className="flex pt-5 justify-between items-center">
              <div>
                <p className="text-jingga">589 грн</p>
                <p className="">1 шт</p>
              </div>
              <div>
                <div
                  className={`${
                    active ? 'bg-brown' : ' bg-white'
                  } rounded-full p-3 `}
                >
                  {active ? (
                    <img src="./icon/cartactive.svg"></img>
                  ) : (
                    <img src="./icon/cart.svg"></img>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
