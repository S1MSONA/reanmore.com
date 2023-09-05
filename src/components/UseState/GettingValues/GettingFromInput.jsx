import { useState } from "react";
import "./Style.css";
const GettingFromInput = () => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="main">
      <h3>{value}</h3>
      <input
        value={value}
        onChange={handleChange}
        type="text"
        placeholder="Typing..."
      />
      <button
        onClick={() => {
          setValue("");
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default GettingFromInput;
