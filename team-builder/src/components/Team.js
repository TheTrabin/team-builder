import React from "react";
import styled from "styled-components";

const MemberContainer = styled.div`
background: #228656;
display: flex;
flex-direction: row;
justify-content: space-evenly;
border-radius: 20px;
`;

const TeamList = styled.div`
background: black;
border: 2px solid grey;
width: 200px;
display: flex;
flex-direction: column;
margin: 0;
justify-content: center;
font-family: 'Neucha', cursive;
border-radius: 8px;
`;

const Name = styled.h2 `
color: Blue;
`;

const Email = styled.p`
color: green;
`;

const Role = styled.p`
color: yellow;
`;

const Team = props => {

  return (
    <MemberContainer>
      {props.team.map(tm => (
        <TeamList key={tm.id}>
          <Name>{tm.name}</Name>
          {/* <p>{tm.class}</p>
          <p>{tm.weapon}</p> */}
          <Email>{tm.email}</Email>
          <Role>{tm.role}</Role>
          {/* <button>Edit</button> */}
        </TeamList>
      ))}
    </MemberContainer>
  );
};

export default Team;