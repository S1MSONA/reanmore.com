import React, { useEffect, useState } from "react";

const FetchingData = () => {
  const url = "https://api.github.com/users";
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return null;
};

export default FetchingData;
