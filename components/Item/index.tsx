import React from 'react';

type ItemProps = {
  active: boolean;
  data: any;
};

const Item = ({ active, data }: ItemProps) => {
  return (
    <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)]  flex relative flex-col w-full bg-white rounded-[24px]  ">
      <img src="./icon/iconscales.svg" className="absolute right-0 p-5" />
      <div className="flex justify-center py-16 w-full h-[300px]">
        <img src={data.image} className="w-[100px] " />
      </div>
      <div className="p-2 h-full">
        <div className="bg-background bottom-0 h-full  w-full rounded-[24px]">
          <div className="lg:p-3 p-5 md:p-2 w-full ">
            <div className=" h-[50px] max-h-[50px]">
              <p className="font-bold">
                {data.title.length > 50
                  ? data.title.substring(0, 50) + '...'
                  : data.title}
              </p>
            </div>
            <div>
              <p className="text-green">{data.category}</p>
            </div>
            <div className="flex pt-5 justify-between items-center">
              <div>
                <p className="text-jingga">{data.price} $USD</p>
                <p className="">Rating {data.rating?.rate}</p>
              </div>
              <div>
                <div
                  className={`${
                    active ? 'bg-brown' : ' bg-white'
                  } rounded-full p-3 hover:cursor-pointer`}
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
