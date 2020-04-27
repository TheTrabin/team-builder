import React, { useState } from "react";
import styled from 'styled-components';

const Card = styled.div`
background: #224488;
display: flex;
flex-direction: row;
justify-content: space-evenly;
border-radius: 20px;
margin-bottom: 2%;
`;

const InputBox = styled.form`
background: black;
border: 2px solid grey;
width: 200px;
display: flex;
flex-direction: column;
margin: 0;
justify-content: center;
color: white;
font-family: 'Neucha', cursive;
`;


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
    <Card>
    <InputBox onSubmit={submitForm}>
      
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
    </InputBox>
    </Card>    
  );
};

export default Form;
