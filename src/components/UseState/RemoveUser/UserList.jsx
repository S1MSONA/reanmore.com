import React from "react";
import User from "./User";
import "./user.css";
import PeopleList from "./Data";

const UserList = () => {
  return (
    <div className="container">
      {PeopleList.map((p) => (
        <User {...p} key={p.id} />
      ))}
      <button className="btn btn-danger">Clear All</button>
    </div>
  );
};

export default UserList;
