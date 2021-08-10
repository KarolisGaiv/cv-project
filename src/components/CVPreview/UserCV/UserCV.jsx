import React from 'react';
import './userCV.scss';
import Card from '../Card/Card';

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
      <div className='education-wrapper'>
        <h2 className='section-header'>Education</h2>
        {education.map((education) => (
          <Card
            fromDate={education.fromDate}
            toDate={education.toDate}
            title={education.study}
            location={education.school}
          />
        ))}
      </div>
      <div className='experience-wrapper'>
        <h2 className='section-header'>Experience</h2>
        {workExperience.map((workRecord) => (
          <Card
            fromDate={workRecord.fromDate}
            toDate={workRecord.toDate}
            title={workRecord.position}
            location={workRecord.companyName}
            description={workRecord.jobDescription}
          />
        ))}
      </div>
    </div>
  );
}

export default UserCV;
