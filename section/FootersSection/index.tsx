import React from 'react';
import MenuIcon from '../../components/MenuIcon';
import styles from '../../styles';
type FooterSectionProps = {};

const FooterSection = (props: FooterSectionProps) => {
  return (
    <div className={`${styles.xPaddings} bottom-0 flex flex-col`}>
      <div className="md:flex md:flex-row md:justify-between">
        <div className="w-full md:w-[25%]">
          <div>
            <img src="/icon/logo.png" />
          </div>
          <div className="flex  py-3">
            <p className="">We offer customers a wide selection of products</p>
          </div>
        </div>
        <div className="flex w-full sm:flex-wrap justify-between md:justify-around ">
          <div className="flex order-last flex-col ">
            <p className="font-bold p-2">Information</p>
            <ul>
              <li className="p-2">About company</li>
              <li className="p-2">Payment and delivery</li>
              <li className="p-2">Partners</li>
            </ul>
          </div>
          <div className=" flex flex-col  ">
            <p className="font-bold p-2">Goods</p>
            <ul>
              <li className="p-2">Product catalog</li>
              <li className="p-2">Protection products</li>
              <li className="p-2">Seed</li>
              <li className="p-2">Fertilizers</li>
              <li className="p-2">Agronomist to help</li>
            </ul>
          </div>
        </div>
        <div className=" md:full w-[50%] flex flex-col pt-10 md:pt-0  ">
          <div className="flex  ">
            <p className="font-bold p-2">Contact</p>
          </div>
          <div className="flex flex-col ">
            <div className="py-3 flex items-center">
              <div className="p-2">
                <MenuIcon count={0} />
              </div>
              <div className="flex flex-col justify-center pr-2 ">
                <p>+38 (067) 115 00 58</p>
                <p className="text-jingga  underlined font-bold">
                  Order feedback
                </p>
              </div>
            </div>
            <div className="py-3 flex items-center">
              <div className="p-2">
                <MenuIcon count={0} />
              </div>
              <div className="flex flex-col justify-center ">
                shoppify@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-row justify-center ">
        <p className="text-gray">© 2022 SHP</p>
      </div>
      <div />
    </div>
  );
};

export default FooterSection;
