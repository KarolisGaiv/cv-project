import React from "react";
import "./personalDetails.scss";

function PersonalDetailsForm({
  name,
  surname,
  email,
  number,
  handleName,
  handleSurname,
  handleEmail,
  handleNumber,
  handleSubmit,
}) {
  // const [name, setName] = useState("");
  // const [surname, setSurname] = useState("");
  // const [email, setEmail] = useState("");
  // const [number, setNumber] = useState("");

  // function handleSubmit(e) {
  //   e.preventDefault();
  // }

  return (
    <div className="details-form-wrapper">
      <h1>Personal Details</h1>
      <form className="details-form" onSubmit={handleSubmit}>
        <label htmlFor="name-field">Name</label>
        <input
          type="text"
          id="name-field"
          placeholder="John"
          value={name}
          onChange={handleName}
        />
        <label htmlFor="surname-field">Last Name</label>
        <input
          type="text"
          id="surname-field"
          placeholder="Doe"
          value={surname}
          onChange={handleSurname}
        />
        <label htmlFor="email-field">Email</label>
        <input
          type="email-field"
          id="email-field"
          placeholder="example@gmail.com"
          value={email}
          onChange={handleEmail}
        />
        <label htmlFor="phone-field">Phone Number</label>
        <input
          type="number"
          id="phone-field"
          value={number}
          onChange={handleNumber}
        />
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}

export default PersonalDetailsForm;
