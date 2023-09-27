import { Link } from "react-router-dom";
import data from "../../Data/Data";

const User = () => {
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

// Get Data by Fetch API
// export const userLoader = async () => {
//   const resp = await fetch("https://jsonplaceholder.typicode.com/users");
//   return resp.json();
// };
export default User;
