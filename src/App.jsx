import React, { useState } from "react";
import PersonalDetailsForm from "./components/CVForm/PersonalDetailsForm/PersonalDetails";
import PersonDetails from "./components/CVPreview/PersonDetails/PersonDetails";
import "./styles/styles.scss";

function App() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [person, setPerson] = useState({});

  function handleName(e) {
    setName(e.target.value);
  }
  function handleSurname(e) {
    setSurname(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handleNumber(e) {
    setNumber(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setPerson(name, surname, email, number);
    console.log(person);
  }

  return (
    <div className="content-wrapper">
      <PersonalDetailsForm
        name={name}
        surname={surname}
        email={email}
        number={number}
        handleName={handleName}
        handleSurname={handleSurname}
        handleEmail={handleEmail}
        handleNumber={handleNumber}
        handleSubmit={handleSubmit}
      />
      <PersonDetails person={person} />
    </div>
  );
}

export default App;
