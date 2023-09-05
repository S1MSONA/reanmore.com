import React, { useState } from "react";

import "./Counter.css";
const Counter = () => {
  const [counter, setCouner] = useState(0);
  // const counter = arr[0];
  // const setCouner = arr[1];
  // const handleIncreament = () => {
  //   setCouner(counter + 1);
  // };

  return (
    <div className="container">
      <h1>{counter}</h1>
      <button className="btn" onClick={() => setCouner(counter + 1)}>
        Increament
      </button>
    </div>
  );
};

export default Counter;
