import { Link } from "react-router-dom";
const UserErrorPage = () => {
  return (
    <div>
      <h4>Something Went Wrong!</h4>
      <br />
      <Link to="/user">Back</Link>
    </div>
  );
};

export default UserErrorPage;
