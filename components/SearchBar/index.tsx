import React from 'react';

type SearchBarProps = {};

const SearchBar = (props: SearchBarProps) => {
  return (
    <div className="bg-white flex  divide-x mx-auto divide-gray  divide-solid items-center justify-around pl-6  border-2 border-solid border-gray  rounded-[20px] w-[350px] h-[40px]">
      <input
        placeholder="Пошук"
        className="w-full h-full placeholder-gray-500   focus:outline-none"
      />
      <img src="/icon/search.svg" className="px-6  " />
    </div>
  );
};

export default SearchBar;
