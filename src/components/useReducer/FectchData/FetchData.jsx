import React, { useEffect, useReducer } from "react";
import axios from "axios";

const defaultState = {
  users: [],
  isLoading: true,
  isError: false,
};
const reducer = (state, action) => {
  if (action.type === "FETCH") {
    return { ...state, users: action.payload.data };
  }
  if (action.type === "ERROR") {
    return { ...state, isError: true };
  }
  if (action.type === "LOADING") {
    return { ...state, isLoading: false };
  }
};
const FetchData = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const url = "https://api.github.com/users";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios(url);
        dispatch({ type: "FETCH", payload: { data } });
      } catch (error) {
        dispatch({ type: "ERROR" });
      }
      dispatch({ type: "LOADING" });
    };
    fetchData();
  }, []);

  if (state.isLoading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }
  if (state.isError) {
    return <h2 style={{ textAlign: "center" }}>Something went wrong!</h2>;
  }
  return (
    <div className="container container-width">
      {state.users.map((user) => {
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

export default FetchData;
