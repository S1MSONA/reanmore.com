import React, { useEffect, useState } from "react";
import axios from "axios";
const FetchingData = () => {
  const url = "https://api.github.com/users";

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios(url);
        setUsers(data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }
  if (isError) {
    return <h2 style={{ textAlign: "center" }}>Sonething went wrong!</h2>;
  }

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
