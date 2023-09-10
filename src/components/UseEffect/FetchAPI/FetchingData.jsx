import React, { useEffect, useState } from "react";
import axios from "axios";
const FetchingData = () => {
  const url = "https://api.github.com/users";
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios(url);
        setUsers(data);
        // const response = await fetch(url);
        // if (!response.ok) {
        //   const smg = "Something went wrong!";
        //   throw new Error(smg);
        // }
        // const data = await response.json();
        // setUsers(data);
      } catch (error) {
        console.log((error.response.statusText = "Something went wrong!"));
      }
    };
    fetchData();
  }, []);
  return (
    <div className="container container-width">
      {users.map((user) => {
        const { id, avatar_url, html_url, login } = user;
        return (
          <article className="card" key={id}>
            <img src={avatar_url} alt={login} />
            <h3>{login}</h3>
            <a href={html_url}>See Profile</a>
          </article>
        );
      })}
    </div>
  );
};

export default FetchingData;
