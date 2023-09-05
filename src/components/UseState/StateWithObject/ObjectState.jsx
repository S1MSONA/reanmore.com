import React, { useState } from "react";

const ObjectState = () => {
  const obj = {
    name: "Jenny",
    age: 23,
    job: "IT",
  };
  const newObj = { ...obj, job: "Manager" };
  const [user, setUser] = useState(obj);
  //   const handleChange = () => {
  //     setUser({ ...obj, name: "Jerry" });
  //   };
  return (
    <div>
      <h3>{user.name}</h3>
      <h3>{user.age}</h3>
      <h3>{user.job}</h3>
      <button onClick={() => setUser(newObj)}>Change</button>
    </div>
  );
};

export default ObjectState;
