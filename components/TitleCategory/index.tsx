import React from 'react';
import Title from '../Title';

type TitleCategoryProps = {};

const TitleCategory = (props: TitleCategoryProps) => {
  return (
    <section className="flex  justify-center">
      <div>
        <div className="hidden md:block md:flex md:justify-center">
          <p>Головна * </p> <p>Каталог * </p> <p>рослин * </p>
        </div>
        <Title text="Засоби захисту рослин" />
      </div>
    </section>
  );
};

export default TitleCategory;
