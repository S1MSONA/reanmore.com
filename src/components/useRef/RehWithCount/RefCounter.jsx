import React, { useRef, useState } from "react";

const RefCounter = () => {
  const [count, setCount] = useState(0);
  const ref = useRef(0);
  const handleIncreament = () => {
    setCount(count + 1);
    ref.current++;
    // console.log("count: " + count);
    console.log("ref: " + ref.current);
  };
  return (
    <article>
      <h3>{ref.current}</h3>
      <button onClick={handleIncreament}>Increament</button>
    </article>
  );
};

export default RefCounter;
