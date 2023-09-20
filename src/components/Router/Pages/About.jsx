import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h2>About</h2>
      <div style={{ margin: "15px 0" }}>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};

export default About;
