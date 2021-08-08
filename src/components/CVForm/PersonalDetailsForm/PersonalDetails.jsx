import React from 'react';
import './personalDetails.scss';

function PersonalDetailsForm({ setName, setSurname, setEmail, setNumber }) {
  function handleName(e) {
    const name = e.target.value;
    setName(name);
  }

  function handleSurname(e) {
    const surname = e.target.value;
    setSurname(surname);
  }

  function handleEmail(e) {
    const email = e.target.value;
    setEmail(email);
  }

  function handleNumber(e) {
    const number = e.target.value;
    setNumber(number);
  }

  return (
    <div className='details-form-wrapper'>
      <h1 className='section-header'>Personal Details</h1>
      <form className='details-form'>
        <label htmlFor='name-field'>Name</label>
        <input
          type='text'
          id='name-field'
          placeholder='John'
          onChange={handleName}
          required
        />
        <label htmlFor='surname-field'>Last Name</label>
        <input
          type='text'
          id='surname-field'
          placeholder='Doe'
          onChange={handleSurname}
          required
        />
        <label htmlFor='email-field'>Email</label>
        <input
          type='email-field'
          id='email-field'
          placeholder='example@gmail.com'
          onChange={handleEmail}
          required
        />
        <label htmlFor='phone-field'>Phone Number</label>
        <input type='number' id='phone-field' onChange={handleNumber} />
      </form>
    </div>
  );
}

export default PersonalDetailsForm;
