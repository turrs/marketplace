import React from 'react';
import Title from '../Title';

type TitleCategoryProps = {
  text: string;
};

const TitleCategory = ({ text }: TitleCategoryProps) => {
  return (
    <section className="flex  justify-center">
      <div>
        <Title text={text} />
      </div>
    </section>
  );
};

export default TitleCategory;
