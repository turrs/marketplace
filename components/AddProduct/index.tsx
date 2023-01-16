import React, { useState } from 'react';
import Button from '../Button';

type AddProductProps = {};

const AddProduct = (props: AddProductProps) => {
  const [showModal, setShowModal] = useState<any | null>(false);
  return (
    <>
      <Button text="Buy" image="" onClick={() => setShowModal(!showModal)} />
      {showModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  ">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => setShowModal(false)}
            />
            <div className="flex   -px-2  justify-center py-8">
              <div className="relative w-full max-w-lg p-6 mx-auto  bg-white rounded-md shadow-lg">
                <div className="mt-3 sm:flex w-full">
                  <div className="mt-2 text-center sm:ml-1 sm:text-left w-full">
                    <div className="flex flex-col w-full">weq</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default AddProduct;
