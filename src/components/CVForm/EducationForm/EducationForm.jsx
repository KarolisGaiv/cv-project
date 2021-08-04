import React, { useState } from 'react';
import './educationForm.scss';

function EducationForm({ setEducation }) {
  const [educationExp, setEducationExp] = useState([]);

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

  return (
    <div>
      <h2>Education Details</h2>
      <button className='open-form-btn' onClick={displayForm}>
        Add
      </button>
      <form className='education-form'>
        <label htmlFor='school-field'>School Name</label>
        <input type='text' id='school-field' placeholder='MIT' />
        <label htmlFor='study-field'>Study Subject</label>
        <input type='text' id='study-field' placeholder='Physics' />
        <h3>Date of Study</h3>
        <label htmlFor='study-start'>From</label>
        <input type='text' placeholder='YYYY' />
        <label htmlFor='study-end'>To</label>
        <input type='text' placeholder='YYYY or Present' />
        <input type='submit' value='Add' />
      </form>
    </div>
  );
}

export default EducationForm;
