import React from 'react';
import './userCV.scss';

function UserCV({ person, education, workExperience }) {
  return (
    <div className='cv-wrapper'>
      <div className='personal-details --wrapper'>
        <h1 className='personal-details --name'>
          {person.name} {person.surname}
        </h1>
        <div className='personal-contacts-wrapper'>
          <h4 className='personal-contacts --email'>{person.email}</h4>
          <h4 className='personal-contacts --number'>{person.number}</h4>
        </div>
      </div>
      <div className='personal-education-wrapper'>
        <h2 className='section-header'>Education</h2>
        {education.map((education) => (
          <div className='education-record' key={education.study}>
            <div className='education-period'>
              {education.fromDate} - {education.toDate}
            </div>
            <div className='education-details'>
              <div className='education-subject'>{education.study}</div>
              <div className='education-school'>{education.school}</div>
            </div>
          </div>
        ))}
      </div>
      <div className='work-experience-wrapper'>
        <h2 className='section-header'>Experience</h2>
        {workExperience.map((workRecord) => (
          <div className='work-record'>
            <div className='card-top'>
              <div className='work-period' key={workRecord.position}>
                {workRecord.fromDate} {workRecord.toDate}
              </div>
              <div className='work-details'>
                <div className='work-position'>{workRecord.position}</div>
                <div className='work-company'>{workRecord.companyName}</div>
              </div>
            </div>
            <div className='card-bottom'>
              <div className='work-description'>
                {workRecord.jobDescription}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserCV;
