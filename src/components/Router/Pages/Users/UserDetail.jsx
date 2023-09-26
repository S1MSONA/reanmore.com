import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const UserDetail = () => {
  const data = useLoaderData();
  const { id, name, username, email } = data;
  return (
    <div>
      <article>
        <h4>User Id #{id}</h4>
        <h4>Name: {name}</h4>
        <h4>Username: {username}</h4>
        <h4>Email: {email}</h4>
        <br />
        <button>
          <Link to="/user">Back</Link>
        </button>
      </article>
    </div>
  );
};

export const userDetailLoader = async ({ params }) => {
  const { id } = params;
  const resp = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  return resp.json();
};
export default UserDetail;
