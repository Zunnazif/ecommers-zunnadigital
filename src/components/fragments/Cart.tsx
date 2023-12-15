"use client";

import React, { useState } from "react";
import Image from "next/image";
import ClearIcon from "@mui/icons-material/Clear";

export default function Modal({ cart }: { cart: React.ReactNode }) {
  const [show, setShow] = useState("hidden");

  let dataArr = [
    {
      sku: 101,
      bookName: "Cantik Itu Luka - Eka Kurniawan",
      link: "https://drive.google.com/file/d/1IAuxhflFbztSXqqpwvnyV9KL7V4OzKel/view?usp=drive_link",
      linkPage:
        "https://raw.githubusercontent.com/Zunnazif/halaman-produk/main/halaman-produk/101.jpg",
    },
    {
      sku: 104,
      bookName: "Re dan peREmpuan",
      link: "https://drive.google.com/file/d/1HEPzCaSwdc2keZS-H0f_KhNySPmX-lPX/view?usp=drive_link",
      linkPage:
        "https://raw.githubusercontent.com/Zunnazif/halaman-produk/main/halaman-produk/104.jpg",
    },
    {
      sku: 107,
      bookName:
        "Funiculi Funicula Before the Coffee Gets Cold by Toshikazu Kawaguchi",
      link: "https://drive.google.com/file/d/16crDQ35YlPVnRH7Ah1BBFHq2Osyr96Zm/view?usp=drive_link",
      linkPage:
        "https://raw.githubusercontent.com/Zunnazif/halaman-produk/main/halaman-produk/107.jpg",
    },
    {
      sku: 113,
      bookName: "Bulan by Tere Liye",
      link: "https://drive.google.com/file/d/1msTK8REeY56uhpaU6-qHFYwu2AdUrpo7/view?usp=drive_link",
      linkPage:
        "https://raw.githubusercontent.com/Zunnazif/halaman-produk/main/halaman-produk/113.jpg",
    },
    {
      sku: 114,
      bookName: "Bumi by Tere Li",
      link: "https://drive.google.com/file/d/1CxGBsi3KNjN0NMDzzZXNldZNvTkzRt4J/view?usp=drive_link",
      linkPage:
        "https://raw.githubusercontent.com/Zunnazif/halaman-produk/main/halaman-produk/114.jpg",
    },
    {
      sku: 115,
      bookName: "Ceros dan Batozar by Tere Liye",
      link: "https://drive.google.com/file/d/1EsFsmzGftQvBOVRfZS812qTlfW_Nwri0/view?usp=drive_link",
      linkPage:
        "https://raw.githubusercontent.com/Zunnazif/halaman-produk/main/halaman-produk/115.jpg",
    },
    {
      sku: 118,
      bookName: "Hujan by Tere Liye",
      link: "https://drive.google.com/file/d/14cyoisAjSJHX6n3v8VtT42l1iDx0N6Lz/view?usp=drive_link",
      linkPage:
        "https://raw.githubusercontent.com/Zunnazif/halaman-produk/main/halaman-produk/118.jpg",
    },
    {
      sku: 119,
      bookName: "Hello by Tere Li",
      link: "https://drive.google.com/file/d/1lhXAaP0aNElkk4vwti5acAZpU1EMfFQo/view?usp=drive_link",
      linkPage:
        "https://raw.githubusercontent.com/Zunnazif/halaman-produk/main/halaman-produk/119.jpg",
    },
  ];

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
        <div className="relative p-4 w-full max-w-sm max-h-full">
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
                {dataArr.map(
                  (
                    item: {
                      linkPage: string;
                      sku: number;
                      bookName: string;
                    },
                    index
                  ) => {
                    return (
                      <li key={index} className="mb-1">
                        <div className="bg-gray-400 rounded-lg flex h-16 w-full">
                          <Image
                            priority={true}
                            src={item.linkPage}
                            width={60}
                            height={60}
                            alt={"page-" + item.sku}
                            className="rounded-lg w-16 h-16"
                          />

                          <div className="p-1 pl-3">
                            <h3 className="text-[11px] w-[200px] truncate font-semibold">
                              {item.sku}. {item.bookName}
                            </h3>
                            <p className="text-xs mt-0.5 font-semibold text-red-600">
                              Rp<span>980</span>
                            </p>
                            <p className="text-[9px] mt-0.5">x1</p>
                          </div>
                          <div className="flex items-center text-center text-gray-200">
                            <ClearIcon />
                          </div>
                        </div>
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
                    <td>: 20</td>
                  </tr>
                  <tr>
                    <td>Total Harga</td>
                    <td>
                      : <span className="font-bold">Rp 21.000</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <button
                data-modal-hide="default-modal"
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => setShow("hidden")}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
