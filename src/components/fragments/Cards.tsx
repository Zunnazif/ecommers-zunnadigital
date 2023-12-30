import Image from "next/image";
import { useState } from "react";
import Star from "../elements/Star";

export default function Cards({
  data,
  buyHandler,
  cartData,
}: {
  data: any;
  buyHandler: Function;
  cartData: any[];
}) {
  const [color, setColor] = useState("bg-gray-500");

  function changeColor(sku: number) {
    if (color == "bg-gray-500") {
      setColor("bg-red-500");
    } else {
      setColor("bg-gray-500");
    }
  }

  return (
    <>
      {data.map(
        (item: {
          linkPage: string;
          sku: number;
          bookName: string;
          price: number;
        }) => {
          return (
            <div
              key={item.sku}
              className="max-w-[40%] sm:max-w-[18%] lg:max-w-[12%] bg-slate-950 rounded-md shadow-md"
            >
              <span className="bg-yellow-500 px-0.5 absolute ml-0.5 rounded-ss-md">
                <p className="text-[50%] font-semibold text-red-600">51%</p>
                <p className="text-[40%] text-white">OFF</p>
              </span>
              <Image
                priority={true}
                width={500}
                height={500}
                src={item.linkPage}
                alt={`page-${item.sku}`}
                className="text-lg rounded-t-lg"
              />
              <div className="content text-white p-2">
                <p className="text-[60%] modernWay sm:text-[65%]">
                  {item.sku}. {item.bookName}
                </p>
                <div className="flex my-2">
                  <h3 className="text-red-500 text-xs">
                    <span className="text-[60%] sm:text-[70%]">Rp</span>
                    {item.price}
                  </h3>
                  <p className="text-[50%] sm:text-[60%] ml-2 line-through">
                    Rp2000
                  </p>
                </div>
                <div className="flex justify-between">
                  <button
                    onClick={() => {
                      changeColor(item.sku);
                      buyHandler(item);
                    }}
                    className="bg-gray-500 px-3 text-xs rounded-lg"
                  >
                    Beli
                  </button>

                  <div className="flex items-center">
                    <Star className="w-2 text-yellow-300 ms-1" />
                    <Star className="w-2 text-yellow-300 ms-1" />
                    <Star className="w-2 text-yellow-300 ms-1" />
                    <Star className="w-2 text-yellow-300 ms-1" />
                    <Star className="w-2 ms-1 text-gray-300 dark:text-gray-500" />
                  </div>
                </div>
              </div>
            </div>
          );
        }
      )}
    </>
  );
}
