import React, { useState } from 'react';
import './workForm.scss';
import Card from '../../CVPreview/Card/Card';

function WorkForm({ workHistory, setWorkExperience }) {
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
      openBtn.className = 'open-workForm-btn --close';
    } else {
      openBtn.innerHTML = 'Add';
      openBtn.className = 'open-workForm-btn --add';
    }
  }

  const newJobRecord = {
    companyName,
    position,
    jobDescription,
    fromDate,
    toDate,
    key: position,
  };

  function addRecord(e) {
    e.preventDefault();
    setWorkExperience((prevRecords) => [...prevRecords, newJobRecord]);
    clearFields();
  }

  function clearFields() {
    setCompanyName('');
    setPosition('');
    setJobDescription('');
    setFromDate('');
    setToDate('');
  }

  return (
    <div className='work-experience-block'>
      <h1 className='section-header'>Work Experience</h1>
      <button className='open-workForm-btn --add' onClick={displayForm}>
        Add
      </button>
      <form className='work-form' onSubmit={addRecord}>
        <label htmlFor='company-field'>Company Name</label>
        <input
          type='text'
          id='company-field'
          placeholder='Google'
          onChange={(e) => setCompanyName(e.target.value)}
          required
          value={companyName}
        />
        <label htmlFor='position-field'>Position Title</label>
        <input
          type='text'
          id='position-field'
          placeholder='CEO'
          onChange={(e) => setPosition(e.target.value)}
          required
          value={position}
        />
        <label htmlFor='job-description'>Job Description</label>
        <textarea
          id='job-description'
          cols='30'
          rows='5'
          placeholder='Main tasks of your jobs'
          onChange={(e) => setJobDescription(e.target.value)}
          required
          value={jobDescription}
        ></textarea>
        <label htmlFor='work-from'>From:</label>
        <input
          type='text'
          placeholder='YYYY'
          onChange={(e) => setFromDate(e.target.value)}
          required
          value={fromDate}
        />
        <label htmlFor='work-to'>To:</label>
        <input
          type='text'
          placeholder='YYYY or Present'
          onChange={(e) => setToDate(e.target.value)}
          required
          value={toDate}
        />
        <div className='button-wrapper'>
          <button className='record-btn --add'>Add Record</button>
          <button onClick={clearFields} className='record-btn --close'>
            Cancel
          </button>
        </div>
      </form>
      {workHistory.map((previousWork) => (
        <div className='record-wrapper' key={previousWork.key}>
          <Card
            fromDate={previousWork.fromDate}
            toDate={previousWork.toDate}
            title={previousWork.position}
            location={previousWork.companyName}
            description={previousWork.jobDescription}
          />
          {workHistory.length > 0 ? (
            <button className='delete-btn --close'>Delete</button>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default WorkForm;
