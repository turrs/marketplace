import React from 'react';
import Image from 'next/image';
import styles from '../../styles';
type InfoSectionProps = {};

const InfoSection = (props: InfoSectionProps) => {
  return (
    <div className="relative ">
      <div className="p-3">
        <Image
          objectFit="cover"
          layout="fill"
          className="object-center  object-cover pointer-events-none"
          src="/icon/footer3.jpg"
          alt="test"
        />
      </div>
      <div className="">
        <div className="relative flex flex-row md:justify-center items-center">
          <img src="./icon/iconsection.svg" className="p-2" />
          <p className=" text-green font-extrabold text-4xl">
            Marketplace information
          </p>
        </div>

        <div
          className={`${styles.xPaddings} p-3  relative w-full flex flex-col justify-center`}
        >
          <p className=" text-white w-full">
            Welcome to our online marketplace for clothing! We offer a wide
            selection of stylish and affordable garments for men, women, and
            children. Our inventory includes clothing for all seasons and
            occasions, from casual wear to formal attire.
          </p>
          <p className=" text-white w-full">
            Welcome to our online marketplace for clothing! We offer a wide
            selection of stylish and affordable garments for men, women, and
            children. Our inventory includes clothing for all seasons and
            occasions, from casual wear to formal attire. We work with a variety
            of vendors to bring you the latest fashion trends at unbeatable
            prices. With our user-friendly website, you can easily browse and
            shop for clothes by category, size, color, and more.
          </p>
          <p className=" text-white w-full">
            Our easy-to-use online checkout makes it simple to place an order
            and have your new clothes delivered right to your door. Plus, with
            our secure payment options, you can shop with confidence knowing
            that your information is safe.
          </p>
          <p className=" text-white w-full">
            Don't miss out on our daily deals and discounts, and sign up for our
            newsletter to stay informed about new arrivals and special
            promotions. Thank you for choosing our marketplace for your clothing
            needs. We are constantly updating our inventory and strive to
            provide the best shopping experience for our customers. Happy
            shopping!
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
