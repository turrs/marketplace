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
          className="object-center opacity-75  object-cover pointer-events-none"
          src="/icon/example.jpg"
          alt="test"
        />
      </div>
      <div className="">
        <div className="relative flex flex-row md:justify-center items-center">
          <img src="./icon/iconsection.svg" className="p-2" />
          <p className="text-white font-extrabold text-4xl">
            Засоби захисту рослин
          </p>
        </div>

        <div
          className={`${styles.xPaddings} p-3  relative w-full flex flex-col justify-center`}
        >
          <p className=" text-white w-full">
            Засоби захисту рослин поділяють на чотири основні види: механічні,
            хімічні, біологічні та агротехнічні. Проте найраціональніше - це їх
            одночасне, правильне поєднання. Найпоширеніший метод - це хімічний.
            Існують тисячі різних видів препаратів хімічного захисту. Але не
            варто їх плутати, а тим більше об′єднувати з хімічними добривами.
            Методи їх впливу на рослини абсолютно протилежні.
          </p>
          <p className=" text-white w-full">
            Необхідно знати і розрізняти хімічні засоби захисту рослин. Адже ці
            препарати мають суоро визначений об′єкт впливу (збудник хвороби,
            комахи-шкідники, вид або родина бур′янів).
          </p>
          <p className=" text-white w-full">
            Отрутохімікати не терплять халатності. Це той тип препарату, який
            недостатньо просто розвести у воді і обприскати ним рослини. Якщо
            отрутохімікати неправильно застосувати, то вони можуть завдати шкоди
            вам, корисним комахам, урожаю.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
