import React, { useContext, useState } from 'react';
import { patchTaskByID } from '../Api';
import { useAuth } from '../Contexts/AuthContext';
import { UserContext } from '../Contexts/UserContext';
const JobDescriptionBookButton = (props) => {
	const { view, setView, task, new_provider } = props;
	const { emailVerify } = useAuth();
	const { user, setUser } = useContext(UserContext);
	const task_id = task.task_id;

	const body = {
		location: task.location,
		skill_id: task.skill_id,
		booker_id: task.booker_id,
		provider_id: new_provider,
		start_time: task.start_time,
		end_time: task.end_time,
	};

	const [err, setErr] = useState(null);

	const handleBookingClick = () => {
		setErr(null);
		setView('booked view');
		emailVerify();
		patchTaskByID(body, task_id).catch((err) => {
			setView('booking view');
			setErr(
				'Something went wrong and your task could not be booked. Please try again later.'
			);
		});
	};

	if (err) return <p>{err}</p>;

	return (
		<div className="JDbooking">
			{view === 'booking view' && (
				<button className="JDbookTaskButton" onClick={handleBookingClick}>
					Book
				</button>
			)}
		</div>
	);
};

export default JobDescriptionBookButton;
