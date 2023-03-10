import Link from 'next/link';
import React from 'react';
import { useAppDispatch } from '../../states';
import { setAddCart } from '../../states/Cart/action';

type ItemProps = {
  active: boolean;
  data: any;
};

const Item = ({ active, data }: ItemProps) => {
  const dispatch = useAppDispatch();
  const handleAddCart = (data: any) => {
    console.log(55, data);
    dispatch(setAddCart(data));
  };
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
              <Link
                className="font-bold hover:underline"
                href={`/products/${data.id}`}
              >
                {data.title.length > 50
                  ? data.title.substring(0, 45) + '...'
                  : data.title}
              </Link>
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
                  onClick={() => handleAddCart(data)}
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
