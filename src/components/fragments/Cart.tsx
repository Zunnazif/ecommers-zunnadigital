"use client";

import React, { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import Checkout from "./Checkout";

export default function Modal({
  cart,
  cartData,
  cancelHandler,
}: {
  cart: React.ReactNode;
  cartData: any[];
  cancelHandler: Function;
}) {
  const [show, setShow] = useState("hidden");

  let totalPrice = cartData
    .map((item) => item.price)
    .reduce((acc, num) => acc + num, 0);

  let copyOrder = () => {
    let copyContent = cartData
      .map((x) => {
        return x.sku;
      })
      .join(" ");

    navigator.clipboard.writeText(copyContent);

    alert("Pesanan sudah dicopy ^_^");
  };

  return (
    <>
      <div
        className="bg-gray-600 w-10 h-10 rounded-full fixed bottom-6 end-6 flex justify-center items-center"
        onClick={() => setShow("")}
      >
        {cart}
      </div>

      <div
        id="default-modal"
        aria-hidden="true"
        className={`${show} flex justify-center items-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50  w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
      >
        <div className="relative p-4 w-full max-w-sm md:max-w-[400px] max-h-full">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Pesanan
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
            <div className="p-3 md:p-5 space-y-1">
              <ul>
                {cartData.map(
                  (
                    item: {
                      linkPage: string;
                      sku: number;
                      bookName: string;
                      price: number;
                    },
                    index
                  ) => {
                    return (
                      <li key={index} className="mb-1">
                        <button className="bg-gray-400 rounded-lg flex text-start justify-between items-center px-4 h-auto w-full">
                          <h3 className="text-xs text-black font-semibold truncate">
                            {item.sku}. {item.bookName}
                          </h3>
                          <div
                            onClick={() => cancelHandler(item)}
                            className="flex items-center text-center text-gray-200 hover:text-white"
                          >
                            <ClearIcon className="hover:bg-gray-300 hover:bg-opacity-40 rounded-lg cursor-pointer p-1 ml-4" />
                          </div>
                        </button>
                      </li>
                    );
                  }
                )}
              </ul>
            </div>

            {/* <!-- Modal footer --> */}
            <div className="flex justify-between items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600 ">
              <table className="text-white text-sm">
                <tbody>
                  <tr>
                    <td>Jumlah Buku</td>
                    <td>: {cartData.length}</td>
                  </tr>
                  <tr>
                    <td>Total Harga</td>
                    <td>
                      : <span className="font-bold">Rp {totalPrice}</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <button
                onClick={() => copyOrder()}
                data-modal-hide="default-modal"
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Copy Pesanan
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
