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
    const currentUser = {
      name,
      surname,
      email,
      number,
    };
    setPerson(currentUser);
  }

  function showPreviewForm(e) {
    handleSubmit();
    setPreviewStatus(!previewStatus);
  }

  return (
    <div className='content'>
      {!previewStatus ? (
        <ResumeView
          person={person}
          previousEducaction={education}
          workHistory={workExperience}
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
      <div className='bottom'>
        <button onClick={showPreviewForm} className='change-view-btn --add'>
          {previewStatus ? 'Go Back' : 'Save & View'}
        </button>
      </div>
    </div>
  );
}

export default App;
