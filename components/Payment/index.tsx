import React from 'react';

type PaymentProps = {};

const Payment = (props: PaymentProps) => {
  return (
    <div className="bg-white md:divide-x-2 md:divide-y-0 divide-y-2 divide-solid divide-gray flex w-full flex-col md:flex-row rounded-[24px] py-6 px-10">
      <div className="md:w-1/2">
        <p className="font-bold">Producer</p>
        <div>Erigo</div>
      </div>
      <div className="md:w-1/2 md:pl-8">
        <p className="font-bold">Delivery</p>
        <p className="text-gray py-2">Tomorrow according to operator rates</p>
        <div className="flex border-2 border-solid justify-center border-orange rounded-[24px] ">
          <div className="px-4 py-2 flex items-center">
            <img src="/icon/phone.svg" />
          </div>
          <div className="py-2 pr-4 text-orange font-bold">Call message</div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
