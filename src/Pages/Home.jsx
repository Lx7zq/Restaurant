import React, { useEffect, useState } from "react";
import Header from "../Component/header";
import Search from "../Component/search";
import Restaurant from "../Component/restaurant";

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/Restaurant")
      .then((res) => res.json())
      .then((response) => {
        setRestaurants(response);
        setFilteredRestaurants(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="App">
      <div className="header flex justify-center text-xl">
        <Header />
      </div>
      <div>
        <Search
          restaurants={restaurants}
          setFilteredRestaurants={setFilteredRestaurants}
        />
      </div>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-7xl">
        <Restaurant restaurants={filteredRestaurants} />
      </div>
    </div>
  );
}

export default App;
