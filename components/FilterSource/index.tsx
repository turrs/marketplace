import React from 'react';
import itemJson from '../../constant/itemFilter.json';
type FilterSourceProps = {};

const FilterSource = (props: FilterSourceProps) => {
  return (
    <div className="bg-white rounded-[24px] drop-shadow-lg ">
      <div className="flex w-full  rounded-tl-[24px] rounded-tr-[24px]  py-6 bg-jingga justify-center">
        Фільтр
      </div>
      <div>
        <p className="font-bold px-6 py-3">Виробник</p>
        {itemJson.map((item) => (
          <div key={item.title} className="py-3 px-6 flex ">
            <input id="default-checkbox" type="checkbox" />
            <p className="px-6"> {item.title}</p>
          </div>
        ))}
      </div>
      <div>
        <p className="font-bold px-6 py-3">Виробник</p>
        {itemJson.map((item) => (
          <div key={item.title} className="py-3 px-6 flex ">
            <input id="default-checkbox" type="checkbox" />
            <p className="px-6"> {item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterSource;
