import React from 'react';
import Category from '../../components/Category';
import styles from '../../styles';
type CategorySectionProps = {};

const CategorySection = (props: CategorySectionProps) => {
  return (
    <section className={`${styles.xPaddings} py-5 flex `}>
      <div className="md:flex md:w-full hidden md:block justify-between  flex-row">
        <div>
          <Category />
        </div>
        <div>
          <Category />
        </div>
        <div>
          <Category />
        </div>
        <div>
          <Category />
        </div>
        <div>
          <Category />
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
