import { Link } from "react-router-dom";
import errorImg from "../../../assets/img/error.png";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <img src={errorImg} alt="Page Not Found" />
      <Link to="/">Back Home</Link>
    </div>
  );
};

export default ErrorPage;
