import useToggle from "./UseToggle";

const Toggle = () => {
  const [show, toggle] = useToggle(true);
  return (
    <div className="main">
      <h3>{show ? <Message /> : <NoMessage />}</h3>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
};

function Message() {
  return <h2 className="sms">Message...</h2>;
}
function NoMessage() {
  return <h2 className="sms">No Message...</h2>;
}
export default Toggle;
