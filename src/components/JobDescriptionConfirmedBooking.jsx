import React from 'react';

const JobDescriptionConfirmedBooking = (props) => {

    const { task } = props;

    return (
        <div>
            <h1>
                Congratulations! You booked the task.
                    </h1>
           
            <h2>
                Contact {task.first_name} (
                        <a href="https://tmson-api.herokuapp.com/api/users/fthynne0">
                        {task.username}
                            </a>
                                ) for more information and to confirm your start time and exact location. 
            </h2>
        </div>
    );
};

export default JobDescriptionConfirmedBooking;