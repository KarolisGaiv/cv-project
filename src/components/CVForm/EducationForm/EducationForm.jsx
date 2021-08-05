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
    displayEducationRecord(newRecord);
    clearFields();
  }

  function clearFields() {
    setSchool('');
    setStudy('');
    setFromDate('');
    setToDate('');
  }

  function displayEducationRecord(record) {
    const card = document.createElement('div');
    card.className = 'card-block';
    const periodInfo = document.createElement('p');
    periodInfo.className = 'period';
    periodInfo.innerHTML = record.fromDate + '- ' + record.toDate;
    card.appendChild(periodInfo);
    const detailsWrapper = document.createElement('div');
    detailsWrapper.className = 'card-details';
    card.appendChild(detailsWrapper);
    const studySubject = document.createElement('p');
    studySubject.className = 'education-subject';
    studySubject.innerHTML = record.study;
    detailsWrapper.appendChild(studySubject);
    const school = document.createElement('p');
    school.className = 'education-school';
    school.innerHTML = record.school;
    detailsWrapper.appendChild(school);

    const educationBlock = document.querySelector('.education-block');
    educationBlock.appendChild(card);
  }

  return (
    <div className='education-block'>
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
          value={school}
          required
        />
        <label htmlFor='study-field'>Study Subject</label>
        <input
          type='text'
          id='study-field'
          placeholder='Physics'
          onChange={(e) => setStudy(e.target.value)}
          value={study}
          required
        />
        <h3>Date of Study</h3>
        <label htmlFor='study-start'>From</label>
        <input
          type='text'
          placeholder='YYYY'
          onChange={(e) => setFromDate(e.target.value)}
          value={fromDate}
          required
        />
        <label htmlFor='study-end'>To</label>
        <input
          type='text'
          placeholder='YYYY or Present'
          onChange={(e) => setToDate(e.target.value)}
          value={toDate}
          required
        />
        <input type='submit' value='Add Record' />
        <button onClick={clearFields}>Cancel</button>
      </form>
    </div>
  );
}

export default EducationForm;
