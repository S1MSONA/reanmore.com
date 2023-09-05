import React from "react";
import Profile from "./Profile";

const Users = () => {
  const userData = [
    {
      id: 1,
      name: "Jenny",
      position: "Graphic Design",
    },
    {
      id: 2,
      name: "Jelly",
      position: "Web Design",
    },
    {
      id: 3,
      name: "Denny",
      position: "Web Developer",
    },
  ];
  const getUserId = (id) => {
    const newUser = userData.filter((user) => user.id !== id);
    console.log(newUser);
  };
  return (
    <article>
      {userData.map((users) => {
        return <Profile key={users.id} getId={getUserId} {...users} />;
      })}
    </article>
  );
};

export default Users;
