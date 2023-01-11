import React from 'react';
import Title from '../Title';

type TitleCategoryProps = {};

const TitleCategory = (props: TitleCategoryProps) => {
  return (
    <section className="flex  justify-center">
      <div>
        <div className="hidden md:block md:flex md:justify-center">
          <p>Toost</p> <p>Teeest </p> <p>Test </p>
        </div>
        <Title text="TEST" />
      </div>
    </section>
  );
};

export default TitleCategory;
