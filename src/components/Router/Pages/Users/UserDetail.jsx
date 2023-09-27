import { Link, useParams } from "react-router-dom";
import data from "../../Data/Data";
const UserDetail = () => {
  const { id } = useParams();
  const user = data.find((d) => d.id == id);
  return (
    <div>
      <article>
        <h4>User Id #{user.id}</h4>
        <h4>Name: {user.name}</h4>
        <h4>Email: {user.email}</h4>
        <br />
        <button>
          <Link to="/user">Back</Link>
        </button>
      </article>
    </div>
  );
};

// Get Data by Fetch API
// export const userDetailLoader = async ({ params }) => {
//   const { id } = params;
//   const resp = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
//   if (!resp.ok) {
//     throw new Error();
//   }
//   return resp.json();
// };
export default UserDetail;
