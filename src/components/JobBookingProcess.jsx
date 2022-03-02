import React, { useEffect, useState }  from 'react';
import  { useParams } from "react-router-dom";
import { getJobDescription } from '../Api';
import JobDescriptionPage from './JobDescriptionPage';
import JobDescriptionConfirmedBooking from './JobDescriptionConfirmedBooking';

const JobBookingProcess = () => {

    const { task_id } = useParams();
    
    const [ task, setTask ] = useState({});

    const [ view, setView ] = useState('booking view');

    useEffect(() => {
        getJobDescription(task_id)
        .then((res) => {
            setTask(res);  
        });
    }, [task_id]);
      
    return (
        <div className='jobDescriptionAndBookingPage'>
    
           {view === 'booking view' && (
                  <JobDescriptionPage task={task} view={view} setView={setView} /> 
            )}
    
            {view === 'booked view' && 
                
                <JobDescriptionConfirmedBooking view={view} setView={setView} task={task} />
           
           }    
        </div>
    );
};

export default JobBookingProcess;