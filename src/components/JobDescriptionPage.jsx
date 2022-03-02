import React  from 'react';
import JobDescriptionPageHeader from './JobDescriptionPageHeader';
import JobDescriptionPageCard from './JobDescriptionPageCard';
import JobDescriptionBookingCard from './JobDescriptionBookingCard';

const JobDescriptionPage = (props) => {

    const { task, view, setView } = props;

    return (
        <div className='jobDescriptionPage'>
  
                <JobDescriptionPageHeader />
                <JobDescriptionPageCard task={task} />
                <JobDescriptionBookingCard task={task} view={view} setView={setView}/> 
        
        </div>
    );
};

export default JobDescriptionPage;