"use client";

import Cards from "@/components/fragments/Cards";
import Cart from "@/components/fragments/Cart";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { useEffect, useState } from "react";

export default function Home() {
  const [cartData, setCartData] = useState([]);
  const [search, setSearch] = useState("");
  const [ebook, setEbook] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let dataEbook = async () => {
      let req = await fetch(
        "https://zunnaserver.vercel.app/ebook/GetMultipleEBookByName",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            bookName: search,
          }),
        }
      );
      let res = await req.json();
      if (res.eBooks.length > 0) {
        setEbook(res.eBooks);
      } else {
        setEbook([]);
      }
    };

    dataEbook();
    setIsLoading(false);
  }, [search]);

  let buyHandler = (x: any) => {
    if (!(cartData.filter((e: any) => e.sku == x.sku).length > 0)) {
      setCartData([...cartData, x as never]);
    }
  };

  let cancelHandler = (x: any) => {
    setCartData(
      cartData.filter((e: any) => {
        return e.sku !== x.sku;
      })
    );
  };

  return (
    <>
      <div className="max-w-2xl mx-auto mb-3 bg-slate-950 rounded-2xl p-4 shadow-md mt-3">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center cursor-pointer text-gray-500 p-3">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 683 683"
            >
              <path
                d="M116.933 42.9333C105.2 90 66.6667 252.267 66.6667 254.4C66.6667 256.667 67.4667 257.333 69.8667 257.333C73.0667 257.333 263.067 202.667 269.067 200C270.667 199.333 272 197.867 272 196.933C272 195.867 264.267 189.2 254.667 182C245.2 174.8 237.333 168.4 237.333 167.867C237.333 167.333 242 164.933 247.733 162.667C271.2 152.8 297.067 145.333 319.333 142C336.933 139.333 374.533 139.333 392.133 142C424.133 146.8 461.2 160.533 484.667 176.4C531.333 207.867 571.067 262.933 606.133 344.667C614.133 363.333 616.4 367.467 618.8 367.733L621.733 368.267L620.933 345.733C619.067 297.733 610.133 259.2 592 222C565.333 167.333 520.933 122.4 459.333 87.6C436.4 74.6667 402.533 63.0667 373.333 57.8667C354.133 54.5333 295.867 53.7333 269.733 56.5333C244 59.3333 207.867 66.5333 181.333 74.2667C170 77.6 159.467 80.6667 158 80.9333C155.867 81.4667 152.533 77.3333 139.467 58.1333C129.067 42.6667 122.8 34.6667 121.333 34.6667C119.6 34.6667 118.533 36.8 116.933 42.9333Z"
                fill="#6b7280"
              />
              <path
                d="M52.5333 318C51.0667 321.6 52.9333 360.667 55.3333 377.333C58.1333 396.8 65.0667 423.867 71.3333 440.133C94.1333 498.133 133.067 544.4 191.867 583.333C227.733 606.933 258.933 619.333 302 626.933C317.467 629.733 323.467 630 357.333 629.867C396.267 629.867 410.933 628.533 444 621.867C461.6 618.267 508.667 606.133 516.667 603.2C517.467 602.8 524.933 612.667 534.133 626.533C542.8 639.733 550.667 650.667 551.467 650.667C552.267 650.667 553.6 649.867 554.267 648.933C555.067 648.133 567.467 598.267 582 538.267C600.4 462 607.867 428.667 606.933 427.733C605.333 426.133 406 483.2 402.8 486.133C400.133 488.533 401.067 489.467 420.667 504.133C429.733 511.067 436.8 517.067 436.267 517.6C434.667 519.067 413.333 527.467 400 531.733C345.6 549.733 289.733 549.867 238.4 532.133C202.267 519.6 183.867 508.133 156.533 480.8C121.2 445.2 94.8 403.6 67.3333 339.733C57.7333 317.6 54.5333 312.8 52.5333 318Z"
                fill="#6b7280"
              />
            </svg>
          </div>
          <input
            onChange={(e: any) => setSearch(e.target.value)}
            id="getNameBook"
            type="search"
            className="w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search by Name"
            required
          />
        </div>
      </div>
      {isLoading ? (
        <div id="display" className="flex flex-wrap justify-center gap-2 mt-6">
          <div
            role="status"
            className="flex flex-col justify-center items-center"
          >
            <svg
              aria-hidden="true"
              className="w-14 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <div className="text-white font-bold text-2xl mt-4">Loading...</div>
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-2 px-2">
          <Cards cartData={cartData} data={ebook} buyHandler={buyHandler} />
          <Cart
            cancelHandler={cancelHandler}
            cartData={cartData}
            cart={
              <>
                <ShoppingCartRoundedIcon className="text-white" />
                {cartData.length > 0 && (
                  <span className="bg-red-700 fixed bottom-[52px] end-5 w-5 h-5 rounded-full flex justify-center items-center">
                    <p className="text-xs font-semibold text-white">
                      {cartData.length}
                    </p>
                  </span>
                )}
              </>
            }
          />
        </div>
      )}
    </>
  );
}
