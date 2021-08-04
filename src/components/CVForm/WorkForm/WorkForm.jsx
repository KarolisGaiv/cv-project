import React, { useState } from 'react';
import './workForm.scss';

function WorkForm({ setWorkExperience }) {
  const [companyName, setCompanyName] = useState('');
  const [position, setPosition] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  function displayForm() {
    const formWrapper = document.querySelector('.work-form');
    formWrapper.classList.toggle('--visible');
    const openBtn = document.querySelector('.open-workForm-btn');
    if (formWrapper.classList.value === 'work-form --visible') {
      openBtn.innerHTML = 'Close Form';
    } else {
      openBtn.innerHTML = 'Add Record';
    }
  }

  const newJobRecord = {
    companyName,
    position,
    jobDescription,
    fromDate,
    toDate,
  };

  function addRecord(e) {
    e.preventDefault();
    setWorkExperience((prevRecords) => [...prevRecords, newJobRecord]);
  }

  return (
    <div>
      <h2>Work Experience</h2>
      <button className='open-workForm-btn' onClick={displayForm}>
        Add
      </button>
      <form className='work-form' onSubmit={addRecord}>
        <label htmlFor='company-field'>Company Name</label>
        <input
          type='text'
          id='company-field'
          placeholder='Google'
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <label htmlFor='position-field'>Position Title</label>
        <input
          type='text'
          id='position-field'
          placeholder='CEO'
          onChange={(e) => setPosition(e.target.value)}
        />
        <label htmlFor='job-description'>Job Description</label>
        <textarea
          id='job-description'
          cols='30'
          rows='5'
          placeholder='Main tasks of your jobs'
          onChange={(e) => setJobDescription(e.target.value)}
        ></textarea>
        <label htmlFor='work-from'>From:</label>
        <input
          type='text'
          placeholder='YYYY'
          onChange={(e) => setFromDate(e.target.value)}
        />
        <label htmlFor='work-to'>To:</label>
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

export default WorkForm;
