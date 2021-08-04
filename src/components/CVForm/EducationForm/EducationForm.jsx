import React, { useState } from 'react';
import './educationForm.scss';

function EducationForm({ setEducation }) {
  const [school, setSchool] = useState('');
  const [study, setStudy] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  function displayForm() {
    const formWrapper = document.querySelector('.education-form');
    formWrapper.classList.toggle('--visible');
    const openBtn = document.querySelector('.open-form-btn');
    if (formWrapper.classList.value === 'education-form --visible') {
      openBtn.innerHTML = 'Close Form';
    } else {
      openBtn.innerHTML = 'Add';
    }
    console.log(newRecord);
  }

  const newRecord = {
    school,
    study,
    fromDate,
    toDate,
  };

  function handleSubmit(e) {
    e.preventDefault();
    setEducation((prevExp) => [...prevExp, newRecord]);
  }

  return (
    <div>
      <h2>Education Details</h2>
      <button className='open-form-btn' onClick={displayForm}>
        Add
      </button>
      <form className='education-form' onSubmit={handleSubmit}>
        <label htmlFor='school-field'>School Name</label>
        <input
          type='text'
          id='school-field'
          placeholder='MIT'
          onChange={(e) => setSchool(e.target.value)}
        />
        <label htmlFor='study-field'>Study Subject</label>
        <input
          type='text'
          id='study-field'
          placeholder='Physics'
          onChange={(e) => setStudy(e.target.value)}
        />
        <h3>Date of Study</h3>
        <label htmlFor='study-start'>From</label>
        <input
          type='text'
          placeholder='YYYY'
          onChange={(e) => setFromDate(e.target.value)}
        />
        <label htmlFor='study-end'>To</label>
        <input
          type='text'
          placeholder='YYYY or Present'
          onChange={(e) => setToDate(e.target.value)}
        />
        <input type='submit' value='Add Record' />
      </form>
    </div>
  );
}

export default EducationForm;
