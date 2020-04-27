import React from "react";

const Team = props => {
  return (
    <div className="team-list">
      {props.team.map(tm => (
        <div className="team" key={tm.id}>
          <h2>{tm.name}</h2>
          {/* <p>{tm.class}</p>
          <p>{tm.weapon}</p> */}
          <p>{tm.email}</p>
          <p>{tm.role}</p>
          <button>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default Team;