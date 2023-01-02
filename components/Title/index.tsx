import React from 'react';

type TitleProps = {
  text: String;
};

const Title = ({ text }: TitleProps) => {
  return (
    <div className="flex fle-row justify-center">
      <div className="flex md:pt-4 justify-center">
        <img src="/icon/iconsection.svg" />
      </div>
      <div className="flex  justify-center px-10">
        <p className="md:text-[45px] text-[24px] font-extrabold">{text}</p>
      </div>
      <div className="flex md:pt-4  justify-center">
        <img src="/icon/iconsection2.svg" />
      </div>
    </div>
  );
};

export default Title;
