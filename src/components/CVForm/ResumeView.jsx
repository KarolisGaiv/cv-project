import React from 'react';
import PersonalDetailsForm from './PersonalDetailsForm/PersonalDetails';
import EducationForm from './EducationForm/EducationForm';
import WorkForm from './WorkForm/WorkForm';

function ResumeView({
  person,
  previousEducaction,
  workHistory,
  setName,
  setSurname,
  setEmail,
  setNumber,
  setEducation,
  setWorkExperience,
}) {
  return (
    <div className='resume-form-block'>
      <PersonalDetailsForm
        person={person}
        setName={setName}
        setSurname={setSurname}
        setEmail={setEmail}
        setNumber={setNumber}
      />
      <EducationForm
        previousEducaction={previousEducaction}
        setEducation={setEducation}
      />
      <WorkForm
        workHistory={workHistory}
        setWorkExperience={setWorkExperience}
      />
    </div>
  );
}

export default ResumeView;
