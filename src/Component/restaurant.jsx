import React, { useEffect, useState } from "react";

const Restaurant = () => {
  const [restaurants,SetRestaurant] = useState([]);

   useEffect(() => {
     fetch("http://localhost:3000/Restaurant")
       .then((res) => res.json())
       .then((response) => {
         SetRestaurant(response);
       })
       .catch((err) => {
         console.log(err.message);
       });
   }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 rounded-md border-gray-400">
      {restaurants.map((box) => (
        <div
          key={box.id}
          className="bg-white shadow-xl rounded-lg overflow-hidden"
        >
          <a href="#">
            <img
              className="w-full h-auto hover:scale-125 scale-100 transition-all delay-100 duration-100 hover:rounded-lg"
              src={box.image}
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-xl font-bold text-gray-900 dark:text-gray-900">
                {box.name}
              </h5>
            </a>
            <p className="mb-3 text-gray-700 dark:text-gray-600 font-semibold">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
                {box.description}
              </div>
            </p>
            <div className="flex justify-end">
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-semibold font-medium transition dark:text-white text-gray-200 ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-xl"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Restaurant;
