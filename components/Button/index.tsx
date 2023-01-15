import React from 'react';

type ButtonProps = {
  text: String;
  onClick: any;
  image: any;
};

const Button = ({ text, onClick, image }: ButtonProps) => {
  return (
    <div
      onClick={onClick}
      className="hover:pointer-cursor flex flex-row bg-green hover:opacity-75 hover:cursor-pointer justify-center rounded-[24px] p-1 w-full h-full items-center"
    >
      <img src={image} className="px-2" />
      <p className="text-white text-center">{text}</p>
    </div>
  );
};

export default Button;
