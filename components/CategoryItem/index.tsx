import { useRouter } from 'next/router';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../states';
import { asyncSetCategoryProduct } from '../../states/Product/action';
import styles from '../../styles';
type CategoryItemProps = {};

const CategoryItem = (props: CategoryItemProps) => {
  const category = useAppSelector((state) => state.category);
  const dispatch = useAppDispatch();
  const route = useRouter();
  const handleFilter = (item: any) => {
    dispatch(asyncSetCategoryProduct(item));
    route.push('/catalog');
  };
  return (
    <div className={`${styles.xPaddings}`}>
      <div className="flex flex-row w-full  justify-around flex-wrap   max-w-[1200px]">
        {category.map((item: any) => (
          <div
            onClick={() => handleFilter(item)}
            key={item.title}
            className="md:w-[25%] p-1 hover:cursor-pointer w-[50%] relative  rounded-[24px]"
          >
            <img
              src="./icon/imagecategory.jpg"
              className=" w-full h-full object-cover rounded-[25px] "
            />
            <div className="absolute  opacity-75 flex p-3 bottom-0 w-full">
              <div className="flex p-2 rounded-[24px]   w-full  bg-gray   justify-center">
                {item}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryItem;
