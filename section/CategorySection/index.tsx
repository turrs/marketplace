import React, { useEffect, useState } from 'react';
import Category from '../../components/Category';
import { useAppDispatch, useAppSelector } from '../../states';
import { asyncSetAllCategory } from '../../states/Category/action';
import styles from '../../styles';
type CategorySectionProps = {};

const CategorySection = (props: CategorySectionProps) => {
  const dispatch = useAppDispatch();
  const fetchDataCategory = async () => {
    dispatch(asyncSetAllCategory());
  };
  const data = useAppSelector((state) => state.category);

  useEffect(() => {
    fetchDataCategory();
  }, []);

  return (
    <section className={`${styles.xPaddings} py-5 flex `}>
      <div className="md:flex md:w-full hidden md:block justify-between  flex-row">
        {data?.map((item: any) => {
          return (
            <div>
              <Category item={item} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CategorySection;
