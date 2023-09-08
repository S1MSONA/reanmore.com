import { useEffect, useState } from "react";
import "./style.css";

const ChangeTitle = () => {
  const [counter, setCouner] = useState(0);
  const [value, setValue] = useState("");
  useEffect(() => {
    document.title = counter;
  }, [counter]);
  return (
    <div className="sub-container">
      <h2>{value}</h2>
      <h1>{counter}</h1>
      <input
        value={value}
        type="text"
        onChange={(e) => setValue(e.target.value)}
        placeholder="Typing..."
      />
      <button className="btn" onClick={() => setCouner(counter + 1)}>
        Increament
      </button>
    </div>
  );
};

export default ChangeTitle;
