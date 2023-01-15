import React from 'react';

type FilterCatalogProps = {};

const FilterCatalog = (props: FilterCatalogProps) => {
  return (
    <div className="bg-white flex  divide-x mx-auto divide-gray  divide-solid items-center justify-around pl-6  border-2 border-solid border-gray  rounded-[20px] w-[350px] h-[40px]">
      <input
        placeholder="Search"
        className="w-full h-full placeholder-jingga  focus:outline-none"
      />
      <img src="./icon/selecticon.svg" className="px-6  " />
    </div>
  );
};

export default FilterCatalog;
