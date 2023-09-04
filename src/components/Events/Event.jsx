const Event = () => {
  const onChangeHandler = (e) => {
    console.log(e.target.value);
  };
  const onClickHandler = () => {
    console.log("click Me");
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div>
      <form>
        <input type="text" />
        <button
          onClick={(e) => {
            e.preventDefault();
            console.log("You Click Me");
          }}
        >
          Click Me
        </button>
      </form>
    </div>
  );
};

export default Event;
