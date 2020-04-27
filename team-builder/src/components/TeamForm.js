import React, { useState } from "react";
import styled from 'styled-components';

const InputBox = styled.div`
display: flex;
flex-direction: column;
`;


const TeamForm = ({ addNewTeam }) => {
  
  const [tm, setTm] = useState({ name: "", class: "", weapon: "" });

  const handleChanges = event => {
  
    console.log(event);
    console.log(event.target.name);
    setTm({ ...tm, [event.target.name]: event.target.value });
  };

  const submitForm = event => {
    event.preventDefault();
    addNewTeam(tm);
    setTm({ name: "", class: "", weapon: "" });
  };
  return (
    <InputBox>
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
      
      <label htmlFor="class">Class</label>
      
      <input
        id="class"
        type="text"
        placeholder="Enter Class"
        value={tm.class}
        name="class"
        onChange={handleChanges}
      />
      
      <label htmlFor="weapon">Weapon</label>
      
      <input
        id="role"
        type="text"
        placeholder="Enter Weapon"
        value={tm.weapon}
        name="role"
        onChange={handleChanges}
      />

      <button type="submit">Add Party Member</button>
    </form>
    </InputBox>
  );
};

export default TeamForm;
