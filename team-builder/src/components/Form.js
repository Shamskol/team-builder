import React, { useState } from "react";

export default function TeamForm(props) {
  console.log(props);

  const [teamMember, setTeamMember] = useState({
    id: "",
    firstName: "",
    lastName: "",

    role: ""
  });

  console.log(teamMember);
  function submitHandler(e) {
    e.preventDefault();
    props.setTeam([...props.team, teamMember]);
    setTeamMember({
      id: "",
      firstName: "",
      lastName: "",

      role: ""
    });
  }

  function changeHandler(e) {
    console.log(e.target.name);
    setTeamMember({ ...teamMember, [e.target.name]: e.target.value });
  }

  return (
    <div className="TeamForm">
      <form type="submit" onSubmit={submitHandler}>
        <label htmlFor="form-id">id</label>
        <input
          type="text"
          name="id"
          placeholder="id"
          value={teamMember.id}
          onChange={changeHandler}
        />
        <br />
        <label htmlFor="form-firstname">First Name</label>
        <input
          type="text"
          name="firstName"
          placeholder="Enter your first name here"
          value={teamMember.firstName}
          onChange={changeHandler}
        />
        <br />
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          placeholder="Enter your last name here"
          value={teamMember.lastName}
          onChange={changeHandler}
        />
        <br />

        <label htmlFor="form-role">Role</label>
        <input
          type="text"
          name="role"
          placeholder="Enter your role here"
          value={teamMember.role}
          onChange={changeHandler}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
