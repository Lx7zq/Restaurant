import React, { useState, useEffect } from "react";

const Search = ({ restaurants, setFilteredRestaurants }) => {
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    if (keyword === "") {
      setFilteredRestaurants(restaurants);
      return;
    }

    const result = restaurants.filter((restaurant) => {
      const name = restaurant.name ? restaurant.name.toLowerCase() : "";
      const type = restaurant.type ? restaurant.type.toLowerCase() : "";
      const searchKeyword = keyword.toLowerCase();

      return name.includes(searchKeyword) || type.includes(searchKeyword);
    });

    setFilteredRestaurants(result);
  }, [keyword, restaurants, setFilteredRestaurants]);

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <div className="w-full flex justify-center py-4">
      <label className="flex items-center w-5/6 max-w-lg bg-white rounded-full shadow-lg">
        <input
          type="text"
          className="flex-grow px-4 py-2 text-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search restaurants by name or type..."
          onChange={handleChange}
          value={keyword}
          aria-label="Search for restaurants"
        />
        <button
          type="button"
          className="flex items-center justify-center p-2 text-gray-500 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-5 h-5 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </label>
    </div>
  );
};

export default Search;
