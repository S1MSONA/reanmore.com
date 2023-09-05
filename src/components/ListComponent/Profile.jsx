import React from "react";

const Profile = (props) => {
  const { name, position, id, getId } = props;
  return (
    <div>
      <h3>Name: {name}</h3>
      <button onClick={() => getId(id)}>Click</button>
    </div>
  );
};

export default Profile;
