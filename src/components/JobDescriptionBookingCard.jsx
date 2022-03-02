import React from 'react';
import JobDescriptionBookButton from './JobDescriptionBookButton';

const JobDescriptionBookingCard = (props) => {

    const { task, view, setView } = props;
    
    const new_provider = 2;
    
    return (
        <div>
             <JobDescriptionBookButton  view={view} setView={setView} task={task} new_provider={new_provider}/>           
            
        </div>
    );
};

export default JobDescriptionBookingCard;