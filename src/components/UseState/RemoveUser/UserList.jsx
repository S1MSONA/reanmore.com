import React, { useState } from "react";
import User from "./User";
import "./user.css";
import PeopleList from "./Data";

const UserList = () => {
  const [user, setUser] = useState(PeopleList);
  const handleClear = () => {
    setUser([]);
  };
  const getUserId = (id) => {
    const filterPeople = user.filter((u) => u.id !== id);
    setUser(filterPeople);
  };
  return (
    <div className="container">
      {user.map((p) => (
        <User {...p} getId={getUserId} key={p.id} />
      ))}
      <button className="btn btn-danger" onClick={handleClear}>
        Clear All
      </button>
    </div>
  );
};

export default UserList;
