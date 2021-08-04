import React from 'react';
import './personalDetails.scss';

function PersonalDetailsForm({
  setName,
  setSurname,
  setEmail,
  setNumber,
  handleSubmit,
}) {
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
      <h1>Personal Details</h1>
      <form className='details-form' onSubmit={handleSubmit}>
        <label htmlFor='name-field'>Name</label>
        <input
          type='text'
          id='name-field'
          placeholder='John'
          onChange={handleName}
        />
        <label htmlFor='surname-field'>Last Name</label>
        <input
          type='text'
          id='surname-field'
          placeholder='Doe'
          onChange={handleSurname}
        />
        <label htmlFor='email-field'>Email</label>
        <input
          type='email-field'
          id='email-field'
          placeholder='example@gmail.com'
          onChange={handleEmail}
        />
        <label htmlFor='phone-field'>Phone Number</label>
        <input type='number' id='phone-field' onChange={handleNumber} />
        <input type='submit' value='Submit'></input>
      </form>
    </div>
  );
}

export default PersonalDetailsForm;
