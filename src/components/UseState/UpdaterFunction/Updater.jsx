import React, { useState } from "react";

import "./updater.css";
const Updater = () => {
  const [number, setNumber] = useState(0);
  // const counter = arr[0];
  // const setCouner = arr[1];
  const handleIncreament = () => {
    setTimeout(() => setNumber((currentValue) => currentValue + 1), 3000);
  };

  return (
    <div className="container">
      <h1>{number}</h1>
      <button className="btn" onClick={handleIncreament}>
        Increament
      </button>
    </div>
  );
};

export default Updater;
