import { useLoaderData, Link } from "react-router-dom";

const User = () => {
  const data = useLoaderData();
  return (
    <div className="user">
      {data.map((d) => (
        <Link key={d.id} to={d.id.toString()}>
          {d.name}
        </Link>
      ))}
    </div>
  );
};

export const userLoader = async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/users");
  return resp.json();
};
export default User;
