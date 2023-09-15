import { useGlobalContext } from "../../../Context";

const User = () => {
  const { user, signout } = useGlobalContext();
  return (
    <div className="user-container">
      {user ? (
        <>
          <span>User: {user?.name}</span>
          <button onClick={signout}>Sign Out</button>
        </>
      ) : (
        <button style={{ backgroundColor: "dodgerblue" }}>Sign In</button>
      )}
    </div>
  );
};

export default User;
