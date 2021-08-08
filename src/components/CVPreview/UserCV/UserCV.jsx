import React from 'react';

function UserCV({ person, education, workExperience }) {
  return (
    <div className='cv-wrapper'>
      <div className='personal-details-wrapper'>
        <h2>
          {person.name} {person.surname}
        </h2>
        <div className='personal-contacts-wrapper'>
          <h4>{person.email}</h4>
          <h4>{person.number}</h4>
        </div>
      </div>
      <div className='personal-education-wrapper'>
        {education.map((education) => (
          <div className='education-period' key={education.study}>
            {education.fromDate} - {education.toDate}
            <div className='education-details'>
              {education.study} {education.school}
            </div>
          </div>
        ))}
      </div>
      <div className='work-experience-wrapper'>
        {workExperience.map((workRecord) => (
          <div className='work-period' key={workRecord.position}>
            {workRecord.fromDate} {workRecord.toDate}
            <div className='work-details'>
              {workRecord.position} {workRecord.companyName}{' '}
              {workRecord.jobDescription}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserCV;
