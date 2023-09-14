import Data from "./Data";
const url = "https://api.github.com/users";
const UseFetchData = () => {
  const { isLoading, isError, data } = Data(url);
  if (isLoading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }
  if (isError) {
    return <h2 style={{ textAlign: "center" }}>Sonething went wrong!</h2>;
  }

  return (
    <div className="container container-width">
      {data.map((user) => {
        const { id, avatar_url, html_url, login } = user;
        return (
          <article className="card" key={id}>
            <img src={avatar_url} alt={login} />
            <h3>{login}</h3>
            <a href={html_url}>See Profile</a>
          </article>
        );
      })}
    </div>
  );
};

export default UseFetchData;
