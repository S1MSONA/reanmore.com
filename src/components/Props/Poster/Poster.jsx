const Poster = (props) => {
  const { imageSrc, name, text, children } = props;
  console.log(children);
  return (
    <article className="card">
      <img src={imageSrc} alt="profile" />
      <div className="card-desc">
        <h2>{name}</h2>
        <p>{text}</p>
        {children}
      </div>
    </article>
  );
};

export default Poster;
