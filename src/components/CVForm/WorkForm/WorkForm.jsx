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
  };

  function addRecord(e) {
    e.preventDefault();
    setWorkExperience((prevRecords) => [...prevRecords, newJobRecord]);
    displayWorkRecord(newJobRecord);
    clearFields();
  }

  function clearFields() {
    setCompanyName('');
    setPosition('');
    setJobDescription('');
    setFromDate('');
    setToDate('');
  }

  function displayWorkRecord(record) {
    const card = document.createElement('div');
    card.className = 'record-card';
    const periodInfo = document.createElement('div');
    periodInfo.className = 'period';
    periodInfo.innerHTML = record.fromDate + ' - ' + record.toDate;
    card.appendChild(periodInfo);
    const detailsWrapper = document.createElement('div');
    detailsWrapper.className = 'card-details';
    card.appendChild(detailsWrapper);
    const position = document.createElement('div');
    position.className = 'work-position';
    position.innerHTML = record.position;
    detailsWrapper.appendChild(position);
    const company = document.createElement('div');
    company.className = 'work-comapny';
    company.innerHTML = record.companyName;
    detailsWrapper.appendChild(company);
    const jobDescription = document.createElement('div');
    jobDescription.className = 'work-description';
    jobDescription.innerHTML = record.jobDescription;
    detailsWrapper.appendChild(jobDescription);

    const workBlock = document.querySelector('.work-experience-block');
    workBlock.appendChild(card);
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
    </div>
  );
}

export default WorkForm;
