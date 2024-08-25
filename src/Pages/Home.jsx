import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Header from "../Component/header";
import Search from "../Component/search";
import Restaurant from "../Component/restaurant";
import RestuarantService from "../services/restaurant.service";

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    const getRestaurant = async () => {
      try {
        const response = await RestuarantService.getAllrestaurant();
        if (response.status === 200) {
          console.log(response);

          setRestaurants(response.data);
          setFilteredRestaurants(response.data);
        }
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: error.response?.data?.message || error.message,
          icon: "error",
        });
      }
    };
    getRestaurant();
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
