import React, { useEffect, useRef, useState } from "react";

const StateWithForm = () => {
  const inputRef = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [member, setMember] = useState([]);

  useEffect(() => {
    inputRef.current.focus();
  }, [member]);
  const removeMember = (id) => {
    const filterMember = member.filter((fm) => fm.id !== id);
    setMember(filterMember);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if ((!name, !email)) return null;
    const id = Date.now();
    const addMember = { id, name, email };
    const updateMember = [...member, addMember];
    setMember(updateMember);
    setName("");
    setEmail("");
  };
  return (
    <div className="container">
      <form>
        <h2 className="title">Login Form</h2>
        <div>
          <label htmlFor="name">Name</label>
          <input
            ref={inputRef}
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            type="email"
          />
        </div>
        <button
          className="btn btn-primary"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
      <ul>
        {member.map(({ id, name, email }) => (
          <li key={id}>
            <h3>{name}</h3>
            <h3>{email}</h3>
            <button onClick={() => removeMember(id)}>remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StateWithForm;
