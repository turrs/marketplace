import React, { useState } from 'react';
import Button from '../Button';
import Title from '../Title';

type AddProductProps = {};

const AddProduct = (props: AddProductProps) => {
  const [showModal, setShowModal] = useState<any | null>(false);
  return (
    <>
      <Button
        text="Додати відгук"
        onClick={() => setShowModal(!showModal)}
        image="/icon/cartactive.svg"
      />
      {showModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  ">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => setShowModal(false)}
            />
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-full max-w-4xl p-6 mx-auto  bg-white rounded-md shadow-lg">
                <div className="mt-3 sm:flex w-full">
                  <div className="mt-2 text-center sm:ml-1 sm:text-left w-full">
                    <div className="flex flex-col w-full">
                      <div className="p-10">
                        <div>
                          <Title text="Кошик" />
                        </div>
                        <div className="py-3">
                          <hr />
                        </div>
                        <div>
                          <p>Гербіцид Комманд®, ФМС УКРАЇНА</p>
                        </div>
                        <div>weq</div>
                      </div>
                    </div>
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
