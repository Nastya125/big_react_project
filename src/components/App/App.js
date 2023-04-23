import "./App.css";

import Header from "../Header/Header";
import Products from "../Products/Products";
import Sellers from "../Sellers/Sellers";
import Earphones from "../Earphones/Earphones";
import Launches from "../Launches/Launches";
import Footer from "../footer/Footer";
import React, { useState } from "react";

import context from "../helper/Context";

function App() {
  const [countItems, setCountItems] = useState(0);
  function incrementCountItems() {
    setCountItems(countItems + 1);
  }

  return (
    <div className="App">
      <context.Provider value={{
        incrementCountItems
      }}>
        <Header countItems={countItems} />
        <Products />
        <Sellers />
        <Earphones />
        <Launches />
        <Footer />
      </context.Provider>

    </div>
  );
}

export default App;
