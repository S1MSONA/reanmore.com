import React from "react";
import Poster from "./Poster";
import p1 from "../../../assets/img/p1.jpg";
import p2 from "../../../assets/img/p2.jpg";
import p3 from "../../../assets/img/p3.jpg";

const GroupPoster = () => {
  return (
    <React.Fragment>
      <Poster
        imageSrc={p1}
        name="Pull"
        text="I recently graduated from National University of Management, and the
          major is Information Technology"
      >
        <button className="btn">Read More</button>
      </Poster>
      <Poster
        imageSrc={p2}
        name="Mike"
        text="I recently graduated from National University of Management, and the
          major is Information Technology"
      />
      <Poster
        imageSrc={p3}
        name="Jenny"
        text="I recently graduated from National University of Management, and the
          major is Information Technology"
      />
    </React.Fragment>
  );
};

export default GroupPoster;
