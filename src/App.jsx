import React, { useState } from 'react';
import ResumeView from './components/CVForm/ResumeView';
import UserCV from './components/CVPreview/UserCV/UserCV';
import './styles/styles.scss';

function App() {
  const [previewStatus, setPreviewStatus] = useState(false);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [education, setEducation] = useState([]);
  const [workExperience, setWorkExperience] = useState([]);
  const [person, setPerson] = useState({});

  function handleSubmit() {
    // e.preventDefault();
    const currentUser = {
      name,
      surname,
      email,
      number,
    };
    setPerson(currentUser);
  }

  // function test() {
  //   console.log(name);
  //   console.log(surname);
  //   console.log(education);
  //   console.log(workExperience);
  // }

  function showPreviewForm() {
    handleSubmit();
    setPreviewStatus(true);
  }

  return (
    <div className='content'>
      {!previewStatus ? (
        <ResumeView
          setName={setName}
          setSurname={setSurname}
          setEmail={setEmail}
          setNumber={setNumber}
          setEducation={setEducation}
          setWorkExperience={setWorkExperience}
        />
      ) : (
        <UserCV
          person={person}
          education={education}
          workExperience={workExperience}
        />
      )}

      {/* <button onClick={showPreviewForm}>Test</button> */}
    </div>
  );
}

export default App;
