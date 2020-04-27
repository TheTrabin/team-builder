import React, {useState} from 'react';
import './App.css';
import Team from "./components/Team";
// import TeamForm from "./components/TeamForm";
import Form from "./components/Form";

function App() {
const [team, setTeam] = useState([
  // {
  //   id: 1,
  //   name: "Trabin",
  //   class: "Warrior",
  //   weapon: "Sword"
  // }
  {
    id: 1,
    name: "Michael McLeod",
    email: "admin@mmcleod.me",
    role: "Full Stack Web Development"
  }
]);

const addNewTeam = tm => {
  const newTeam = {
    id: Date.now(),
    // name: tm.name,
    // class: tm.class,
    // weapon: tm.weapon
    name: tm.name,
    class: tm.email,
    weapon: tm.role
  };
  setTeam([...team, newTeam]);
};
const memberToEdit = () => {
  
}

  return (
    <div className="App">
<h1> The Party </h1>
        <Form addNewTeam={addNewTeam} />
        <Team team={team} />
    </div>
  );
}

export default App;
