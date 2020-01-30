import React, { useState } from "react";


export default function TeamForm() {
    const [teamMembers, setTeamMembers] = useState([]);
const [teamForm, setTeamForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "", 

  });

  function submitHandler(e) {
e.preventDefault();
e.persist();
console.log(e);
  }

  function changeHandler(e) {
    console.log(e.target.name)
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
      <form type="submit" onSubmit={ submitHandler}>
        <label htmlFor="form-firstname">First Name</label>
        <input
          type="text"
          name="firstName"
          placeholder="Enter your first name here"
          value={teamForm.firstName}
          onChange={changeHandler}
        />
        <label >Last Name</label>
        <input
          type="text"
          name="lastname"
          placeholder="Enter your first name here"
          value={teamForm.lastname}
          onChange={changeHandler}
        /> 
        <label htmlFor="form-email">e-mail</label>
        <input
          type="text"
          name="email-address"
          placeholder="Enter your email here"
          value={teamForm.emailaddress}
          onChange={changeHandler}
        />
        
    
        <label htmlFor="form-role">Role</label>
        <input
          type="text"
          name="role"
          placeholder="Enter your role here"
          value={teamForm.role}
          onChange={changeHandler}
        />
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}


