import React, { useState } from "react";
import "./style.css";

const ToggleWithState = () => {
  const [alert, setAlert] = useState(false);
  return (
    <div className="container-toggle">
      {alert ? <Message /> : <NoMessage />}
      <button onClick={() => setAlert(!alert)}>Toggle</button>
    </div>
  );

  function Message() {
    return <h2 className="sms">Message...</h2>;
  }
  function NoMessage() {
    return <h2 className="sms">No Message...</h2>;
  }
};

export default ToggleWithState;
