import React, { useState } from 'react';
import './educationForm.scss';
import Card from '../../CVPreview/Card/Card';

function EducationForm({ previousEducaction, setEducation }) {
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
      openBtn.className = 'open-form-btn --close';
    } else {
      openBtn.innerHTML = 'Add';
      openBtn.className = 'open-form-btn --add';
    }
  }

  const newRecord = {
    school,
    study,
    fromDate,
    toDate,
    key: study,
  };

  function handleSubmit(e) {
    e.preventDefault();
    setEducation((prevExp) => [...prevExp, newRecord]);
    clearFields();
  }

  function clearFields() {
    setSchool('');
    setStudy('');
    setFromDate('');
    setToDate('');
  }

  function deleteRecord(e) {
    // get card title to determine which card should be deleted
    const recordTitle = e.target.id;
    // update previous education records array = delete unwanted record
    const updatedArray = previousEducaction.filter(
      (record) => record.study !== recordTitle
    );
    setEducation(updatedArray);
  }

  return (
    <div className='education-block'>
      <h1 className='section-header'>Education Details</h1>
      <button className='open-form-btn --add' onClick={displayForm}>
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
        <label htmlFor='study-start'>From:</label>
        <input
          type='text'
          placeholder='YYYY'
          onChange={(e) => setFromDate(e.target.value)}
          value={fromDate}
          required
        />
        <label htmlFor='study-end'>To:</label>
        <input
          type='text'
          placeholder='YYYY or Present'
          onChange={(e) => setToDate(e.target.value)}
          value={toDate}
          required
        />
        <div className='button-wrapper'>
          <button className='record-btn --add'>Add Record</button>
          <button onClick={clearFields} className='record-btn --close'>
            Cancel
          </button>
        </div>
      </form>
      {previousEducaction.map((educationRecord) => (
        <div className='record-wrapper' key={educationRecord.key}>
          <Card
            fromDate={educationRecord.fromDate}
            toDate={educationRecord.toDate}
            title={educationRecord.study}
            location={educationRecord.school}
          />
          {previousEducaction.length > 0 ? (
            <button
              className='delete-btn --close'
              onClick={deleteRecord}
              id={educationRecord.key}
            >
              Delete
            </button>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default EducationForm;
