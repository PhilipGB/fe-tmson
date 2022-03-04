import React, { useContext, useEffect, useState }  from 'react';
import { useAuth } from '../Contexts/AuthContext';
import { UserContext } from '../Contexts/UserContext';


const JobOwnerApprovalProcess = () => {

	const { user, setUser } = useContext(UserContext);    
    
    const [ view, setView ] = useState('unbookedView');    
    
    const handleConfirmationClick = () => {
        setView('bookedView');
    };

      const handleDeclineClick = () => {
          setView('declinedView');
    };

    return (

        
        <div className='jobAdvertManagement'>
                
            {view === 'unbookedView' && (<div>

                <div className='liveJobAdvertSection'>

                <h1>Your Live Job Adverts</h1>

                    <br></br>

                <h3>Category: languages</h3>

                <h3>Subcategory: russian</h3>

                <h3>Skill Required: Teach Russian speaking and listening to English speakers</h3>

                <h3>Location: Zoom</h3>

                <h3>Description: Hi! I want to learn Russian over Zoom. I am a beginner. </h3>

                    <br></br>

            </div>

            <div className='jobBookingRequestSection'>

                <h1>You have 1 booking request</h1>
                    
                    <br></br>

                <h3>User: Oscar (Oscar123) </h3>

                <h3>About Oscar: I'm Oscar. I like teaching Russian and walking my dog.</h3>

                    <br></br> 

                <button className='authorise-booking-button' onClick={handleConfirmationClick}>Confirm</button>

                <button className='decline-booking-button' onClick={handleDeclineClick}>Decline</button>
                    
            </div>
         
           <div className='completedAdvertsSection'>

                <br></br>

                <h1>Completed Job Adverts</h1>

                <br></br>

                    <uo>

                        <li>You have no completed job adverts.  </li>

                    </uo>

            </div> 

            </div>)} 
            
        {view === 'bookedView' && (

            <div> 

                <h1>Success!</h1>

                <br></br>

                <h2>Your booking is confirmed. We have sent a notification to your Tasker. </h2>

                <br></br>
                
                <h2>When your task is complete, please confirm your Tasker's hours and don't forget to leave a rating!</h2>

            </div>

        )}

        {view === 'declinedView' && (

            <div>

                <h1>This booking request has been declined.</h1>

                <br></br>

                <h2>Your job advert has been released and is now available to book by other Taskers. </h2>

            </div>

        )}

        </div>
            
    )
};


export default JobOwnerApprovalProcess;