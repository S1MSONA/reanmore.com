import React from "react";

const Users = () => {
  const names = ["Jenny", "Jelly", "Jerry", "Tommy", "Denny"];
  const userNames = names.map((n) => {
    return <h3>{n}</h3>;
  });
  return <div>{userNames}</div>;
};

export default Users;
