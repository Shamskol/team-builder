import React, { useState } from "react";
import uuid from "uuid";
import "./App.css";
import Form from "./components/Form";

const list = [
  {
    id: "a",
    firstname: "Jack",
    lastname: "Kim",
    role: "Team Lead"
  },
  {
    id: "b",
    firstname: "Kolade",
    lastname: "Junaid",
    role: "Frontend Dev"
  },
  {
    id: "c",
    firstname: "Marvin",
    lastname: "Lewis",
    role: "Backend Dev"
  },
  {
    id: "d",
    firstname: "Tyler",
    lastname: "Kummer",
    role: "Frontend Dev"
  },

  {
    id: "e",
    firstname: "Bryan",
    lastname: "Bilek",
    role: "Backend Dev"
  },
  {
    id: "f",
    firstname: "Tim",
    lastname: "Shaker",
    role: "Frontend Dev"
  },
  {
    id: "g",
    firstname: "Ryan",
    lastname: "Meinzer",
    role: "Backend Dev"
  }
];

const App = () => {
  const [team, setTeam] = useState(list);
  console.log(team);
  return (
    <div className="App">
      <h1> Team Builder</h1>
      <Form team={team} setTeam={setTeam} />
      <ul>
        {team.map(item => (
          <li key={item.id}>
            <div>{item.id}</div>
            <div>{item.firstname}</div>

            <div>{item.lastname}</div>
            <div>{item.role}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

// const App = () =>
//   const [teamMembers, setTeamMembers] = useState([]);

//   return (
//     <div className="App">

//       <h1> Team Builder</h1>
//       <Form/>
//     </div>
//   );
// }

export default App;
