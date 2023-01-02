import React from 'react';
import category from '../../constant/category.json';
import styles from '../../styles';
type CategoryItemProps = {};

const CategoryItem = (props: CategoryItemProps) => {
  return (
    <div className={`${styles.xPaddings}`}>
      <div className="flex flex-row w-full justify-around flex-wrap   max-w-[1200px]">
        {category.map((item) => (
          <div
            key={item.title}
            className="md:w-[25%]  w-[50%] relative  rounded-[24px]"
          >
            <img
              src="./icon/itemcategory.png"
              className=" w-full h-full object-cover "
            />
            <div className="absolute  opacity-75 flex p-3 bottom-0 w-full">
              <div className="flex p-2 rounded-[24px]   w-full  bg-gray   justify-center">
                {item.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryItem;
