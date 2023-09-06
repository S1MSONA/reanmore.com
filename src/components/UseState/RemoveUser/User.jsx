import React from "react";
import "./user.css";
import p1 from "../../../assets/p1.jpg";
const User = (props) => {
  const { imgSrc, name, age } = props;
  return (
    <article className="box">
      <img src={imgSrc} alt="" />
      <h2>{name}</h2>
      <h2>{age}</h2>
      <button className="btn btn-danger">Remove</button>
    </article>
  );
};

export default User;
