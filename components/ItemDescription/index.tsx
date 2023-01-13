import React, { useState } from 'react';
import AddProduct from '../AddProduct';
import Button from '../Button';

type ItemDescriptionProps = {};

const ItemDescription = (props: ItemDescriptionProps) => {
  const [active, setActive] = useState<any | null>('description');
  const [showModal, setShowModal] = useState<any | null>(false);
  const changeTab = (value: String) => {
    switch (value) {
      case 'description':
        setActive(value);
      case 'review':
        setActive(value);
    }
  };
  return (
    <div className="w-full">
      <div className="flex">
        <div
          onClick={() => changeTab('description')}
          className={`w-1/2 flex py-2 rounded-tl-[24px] rounded-tr-[24px] md:w-[225px] justify-center items-center ${
            active === 'description' ? 'bg-green text-white' : 'bg-background '
          } `}
        >
          <p
            className={`font-bold ${
              active === 'description' ? 'text-white' : 'text-black'
            }`}
          >
            Опис
          </p>
        </div>
        <div
          onClick={() => changeTab('review')}
          className={`w-1/2 flex py-2 rounded-tl-[24px] rounded-tr-[24px]  md:w-[225px] justify-center items-center ${
            active === 'review' ? 'bg-green text-white' : 'bg-background'
          } `}
        >
          <p
            className={`font-bold ${
              active === 'review' ? 'text-white' : 'text-black'
            }`}
          >
            Відгуки
          </p>
        </div>
      </div>
      <div
        className={`w-full bg-white p-6  rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] ${
          active === 'review' && 'rounded-tl-[24px]'
        } `}
      >
        {active === 'description' ? (
          <div>qwer </div>
        ) : (
          <div>
            <div className="flex">
              <div className="w-1/2  ">
                <input className="w-full pr-6 h-full rounded-[24px] border-solid border-gray border-2 px-4  placeholder-gray-500 p-2 focus:outline-orange" />
              </div>
              <div className="w-1/2 flex pl-6 justify-end  ">
                <input className="w-full h-full rounded-[24px] border-solid border-2 px-4 border-gray  placeholder-gray-500 p-2 focus:outline-orange" />
              </div>
            </div>
            <div className="w-full py-6">
              <textarea className="w-full rounded-[24px] min-h-[150px] border-2 border-solid border-gray p-5 focus:outline-orange" />
            </div>
            <div>
              <div className="w-[220px]">
                <Button
                  text="Додати відгук"
                  onClick={() => console.log('test')}
                  image=""
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemDescription;
