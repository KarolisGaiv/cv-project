import React from 'react';
import PersonalDetailsForm from './PersonalDetailsForm/PersonalDetails';
import EducationForm from './EducationForm/EducationForm';
import WorkForm from './WorkForm/WorkForm';

function ResumeView({
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
        setName={setName}
        setSurname={setSurname}
        setEmail={setEmail}
        setNumber={setNumber}
      />
      <EducationForm setEducation={setEducation} />
      <WorkForm setWorkExperience={setWorkExperience} />
    </div>
  );
}

export default ResumeView;
