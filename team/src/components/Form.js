import React, { useState } from "react";


export default function TeamForm() {
const [teamForm, setTeamForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    password: "",
    remember_pass: false
    

  });

  function changeHandler(e) {
    // console.log(e.target.name);
    if(e.target.value === e.target.value.toLowerCase()){
      if (e.target.type === "checkbox") {
        setTeamForm({
          ...teamForm,
          [e.target.name]: e.target.checked
        });
      } else {
        setTeamForm({
          ...teamForm,
          [e.target.name]: e.target.value
        });
      }
    }
  }


  return (
    <div className="TeamForm">
      <form>
        <label htmlFor="form-firstname">First Name</label>
        <input
          type="text"
          name="firstName"
          placeholder="Enter your first name here"
          value={teamForm.firstName}
        />
        <label >Last Name</label>
        <input
          type="text"
          name="lastname"
          placeholder="Enter your first name here"
          value={teamForm.lastname}
        />
        <label htmlFor="form-email">e-mail</label>
        <input
          type="text"
          name="email-address"
          placeholder="Enter your email here"
          value={teamForm.emailaddress}
        />
        <label htmlFor="form-password">e-mail</label>
        <input
          type="text"
          name="password"
          placeholder="Enter your password here"
          value={teamForm.password}
        />
        <label htmlFor="form-role">Role</label>
        <input
          type="text"
          name="role"
          placeholder="Enter your role here"
          value={teamForm.role}
        />
        <label htmlFor="team_remember_pass">Remember password?</label>
        <input
          type="checkbox"
          id="student_remember_pass"
          name="remember_pass"
          onChange={changeHandler}
          checked={TeamForm.remember_pass}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}


