import React, { useState } from 'react';
import PersonalDetailsForm from './components/CVForm/PersonalDetailsForm/PersonalDetails';
// import PersonDetails from "./components/CVPreview/PersonDetails/PersonDetails";
import './styles/styles.scss';

function App() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name, surname, email, number);
  }

  return (
    <div>
      <h1>
        {name} and {surname}
      </h1>
      <PersonalDetailsForm
        setName={setName}
        setSurname={setSurname}
        setEmail={setEmail}
        setNumber={setNumber}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
