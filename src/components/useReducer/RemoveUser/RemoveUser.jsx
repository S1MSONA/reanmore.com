import React, { useState } from "react";
import PeopleList from "./Data";

const RemoveUser = () => {
  const [user, setUser] = useState(PeopleList);
  const handleClear = () => {
    setUser([]);
  };

  const handleRemove = (id) => {
    const filterPeople = user.filter((u) => u.id !== id);
    setUser(filterPeople);
  };
  const handleReset = () => {
    setUser(PeopleList);
  };
  return (
    <div className="container">
      {user.map(({ id, imgSrc, name, age }) => (
        <article className="card" key={id}>
          <img src={imgSrc} alt="profile" />
          <h2>{name}</h2>
          <h2>{age}</h2>
          <button className="btn btn-danger" onClick={() => handleRemove(id)}>
            Remove
          </button>
        </article>
      ))}
      {user.length === 0 ? (
        <button className="btn btn-primary" onClick={handleReset}>
          Reset All
        </button>
      ) : (
        <button className="btn btn-danger" onClick={handleClear}>
          Clear All
        </button>
      )}
    </div>
  );
};

export default RemoveUser;
