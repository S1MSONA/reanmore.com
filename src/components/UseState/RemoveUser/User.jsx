import React from "react";
import "./user.css";
const User = (props) => {
  const { imgSrc, name, age, id, getId } = props;
  const handleClick = () => {
    getId(id);
  };
  return (
    <article className="box">
      <img src={imgSrc} alt="" />
      <h2>{name}</h2>
      <h2>{age}</h2>
      <button className="btn btn-danger" onClick={handleClick}>
        Remove
      </button>
    </article>
  );
};

export default User;
