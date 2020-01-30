import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";


function App() {
  const [teamMembers, setTeamMembers] = useState([]);

  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
