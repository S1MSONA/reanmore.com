import React from "react";

const Users = () => {
  const names = ["Jenny", "Jelly", "Jerry", "Tommy", "Denny"];

  //We can store in const and call it to element either
  // const userNames = names.map((n) => {
  //   return <h3>{n}</h3>;
  // });
  return (
    <div>
      {names.map((n) => (
        <h3>{n}</h3>
      ))}
    </div>
  );
};

export default Users;
