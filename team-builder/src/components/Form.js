import React, { useState } from "react";

const Form = ({ addNewTeam }) => {
  
  const [tm, setTm] = useState({ name: "", email: "", role: "" });

  const handleChanges = event => {
  
    console.log(event);
    console.log(event.target.name);
    setTm({ ...tm, [event.target.name]: event.target.value });
  };

  const submitForm = event => {
    event.preventDefault();
    addNewTeam(tm);
    setTm({ name: "", email: "", role: "" });
  };
  return (
    <form onSubmit={submitForm}>
      
      <label htmlFor="name">Name</label>
      
      <input
        id="name"
        type="text"
        placeholder="Enter Name"
        value={tm.name}
        name="name"
        onChange={handleChanges}
      />
      
      <label htmlFor="email">Email</label>
      
      <input
        id="email"
        type="text"
        placeholder="Email"
        value={tm.email}
        name="email"
        onChange={handleChanges}
      />
      
      <label htmlFor="role">Role</label>
      
      <input
        id="role"
        type="text"
        placeholder="Enter Role"
        value={tm.role}
        name="role"
        onChange={handleChanges}
      />

      <button type="submit">Add Party Member</button>
    </form>
  );
};

export default Form;
