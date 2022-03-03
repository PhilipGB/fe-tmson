import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getJobDescription, patchTaskByID } from '../Api';
import { useAuth } from '../Contexts/AuthContext';
import { UserContext } from '../Contexts/UserContext';

const JobBookingProcess = () => {
  const { user } = useContext(UserContext);
  const { task_id } = useParams();
  const [task, setTask] = useState({});
  const [view, setView] = useState('booking view');
  const new_provider = user.user_id;

  const body = { ...task };

  const [err, setErr] = useState(null);

  const handleBookingClick = () => {
    body.provider_id = new_provider;
    body.task_booking_confirmed = 'true';

    setErr(null);
    setView('booked view');
    patchTaskByID(body, task_id).catch((err) => {
      setView('booking view');
      setErr(
        'Something went wrong and your task could not be booked. Please try again later.'
      );
    });
  };

  useEffect(() => {
    getJobDescription(task_id).then((res) => {
      setTask(res);
    });
  }, [task_id]);

  if (err) return <p>{err}</p>;
  return (
    <div className='jobDescriptionAndBookingPage'>
      {view === 'booking view' && (
        <div className='jobDescriptionPage'>
          <h1>Job Description</h1>

          <div className='grid-container'>
            <h2 className='JDcategory'>Category:</h2>
            <h2 className='JDcategory2'>{task.skill_category}</h2>

            <h2 className='JDsubcategory'>Subcategory:</h2>
            <h2 className='JDsubcategory2'>{task.skill_subcategory}</h2>

            <h2 className='JDlocation'>Location:</h2>
            <h2 className='JDlocation2'>{task.location}</h2>

            <h2 className='JDskillDescription'>Skill:</h2>
            <h2 className='JDskillDescription2'>{task.skill_description}</h2>

            <h2 className='JDabout'>About:</h2>
            <h2 className='JDabout2'>{task.task_description}</h2>

            <img
              className='JDtaskThumbnail'
              src={task.thumbnail_image_url}
              alt={task.task_description}
            />

            <h2 className='JDrequestedBy'>Requested By:</h2>
            <h2 className='JDrequestedBy2'>
              {task.first_name} (
              <a href={`https://tmson-api.herokuapp.com/api/users/${task.username}`}>
                {task.username}
              </a>
              )
            </h2>
          </div>

          <button className='JDbookTaskButton' onClick={handleBookingClick}>
            Book
          </button>
        </div>
      )}

      {view === 'booked view' && (
        <div>
          <h1>Thank you for offering your time and skills!</h1>
          <h2>
          A booking request email has been sent to {task.first_name} (
                    <a href={`https://tmson-api.herokuapp.com/api/users/${task.username}`}>
                        {task.username}
                            </a>
                                ).
            </h2>
            <h2>
				Once {task.first_name} has approved your booking, you will be sent a confirmation email and can proceed with your chosen task.
          </h2>
        </div>
      )}
    </div>
  );
};

export default JobBookingProcess;
