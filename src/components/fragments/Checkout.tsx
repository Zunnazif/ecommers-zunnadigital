"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Modal({ checkout }: { checkout: React.ReactNode }) {
  const [show, setShow] = useState("hidden");

  return (
    <>
      <div onClick={() => setShow("")}>{checkout}</div>
      <div
        id="default-modal"
        aria-hidden="true"
        className={`${show} flex justify-center items-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50  w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
      >
        <div className="relative p-4 w-full max-w-sm md:max-w-[400px] max-h-full">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow dark:bg-white">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-900">
                Checkout
              </h3>
              <button
                type="button"
                className="text-gray-800 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="default-modal"
                onClick={() => setShow("hidden")}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="text-black p-3 md:p-5 space-y-1 flex flex-col justify-center items-center">
              <h1 className="font-bold">Faizunnazif</h1>
              <div className="w-44">
                <Image
                  src={"/Assets/Image/CodeQRIS.jpg"}
                  alt="QRCode-image"
                  width={3000}
                  height={3000}
                />
              </div>
              <p>
                Jumlah Bayar : <span className="font-bold">Rp 13.000</span>
              </p>
              <div className="flex justify-start">
                <h1>Petunjuk Pembayaran</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
