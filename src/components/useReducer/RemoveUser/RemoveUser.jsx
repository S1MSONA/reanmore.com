import { useReducer } from "react";
import People from "./Data";

const initialState = {
  users: People,
};
const reducer = (state, action) => {
  if (action.type === "CLEAR_ALL") return { ...state, users: [] };
  if (action.type === "RESET") return { ...state, users: People };
  if (action.type === "REMOVE") {
    const FilterArray = state.users.filter((f) => f.id !== action.payload.id);
    return { ...state, users: FilterArray };
  }
};

const RemoveUser = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  // Clear All
  const handleClear = () => {
    dispatch({ type: "CLEAR_ALL" });
  };

  //Remove User
  const handleRemove = (id) => {
    dispatch({ type: "REMOVE", payload: { id } });
  };

  //Reset
  const handleReset = () => {
    dispatch({ type: "RESET" });
  };
  return (
    <div className="container">
      {state.users.map(({ id, imgSrc, name, age }) => (
        <article className="card" key={id}>
          <img src={imgSrc} alt="profile" />
          <h2>{name}</h2>
          <h2>{age}</h2>
          <button className="btn btn-danger" onClick={() => handleRemove(id)}>
            Remove
          </button>
        </article>
      ))}
      {state.users.length === 0 ? (
        <button className="btn btn-primary" onClick={handleReset}>
          Reset All
        </button>
      ) : (
        <button className="btn btn-danger" onClick={handleClear}>
          Clear All
        </button>
      )}
    </div>
  );
};

export default RemoveUser;
