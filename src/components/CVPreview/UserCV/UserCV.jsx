import React from 'react';

function UserCV({ person, education, workExperience }) {
  return (
    <div className='cv-wrapper'>
      <h1>{person.name + ' ' + person.surname}</h1>
      {education.map((educationRecord) => (
        <p>{educationRecord.school}</p>
      ))}
      {/* <p>{workExperience}</p> */}
    </div>
  );
}

export default UserCV;
