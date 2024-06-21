import React from "react";
import Header from "./Component/header";
import Search from "./Component/search";
import Restaurant from "./Component/restaurant";

function App() {
  return (
    <div className="App">
      <div className="header flex justify-center text-xl">
        <Header />
      </div>
      <div>
        <Search />
      </div>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-7xl">
        <Restaurant />
      </div>
    </div>
  );
}

export default App;
