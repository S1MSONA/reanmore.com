import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <div style={{ display: "flex", gap: "15px", margin: "15px 0" }}>
        <Link to="/about">About</Link>
        <Link to="/service">Sevice</Link>
      </div>
    </div>
  );
};

export default Home;
