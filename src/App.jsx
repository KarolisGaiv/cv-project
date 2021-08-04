import React, { useState } from 'react';
import PersonalDetailsForm from './components/CVForm/PersonalDetailsForm/PersonalDetails';
import EducationForm from './components/CVForm/EducationForm/EducationForm';
import WorkForm from './components/CVForm/WorkForm/WorkForm';
// import PersonDetails from "./components/CVPreview/PersonDetails/PersonDetails";
import './styles/styles.scss';

function App() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [education, setEducation] = useState([]);
  const [workExperience, setWorkExperience] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const person = {
      name,
      surname,
      email,
      number,
    };
    console.log(person);
  }

  function test() {
    console.log(education);
    console.log(workExperience);
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
      <EducationForm setEducation={setEducation} />
      <WorkForm setWorkExperience={setWorkExperience} />
      <button onClick={test}>Test</button>
    </div>
  );
}

export default App;
