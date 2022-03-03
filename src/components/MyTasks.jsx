// this will sit in the user profile hamgburger menu

import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { UserContext } from '../Contexts/UserContext';
import {getLiveJobs} from '../Utils/api-tokens'

// possibly add section that only shows is user has a minter_id - allows to mint new token

function MyTasks() {

    const { user, setUser } = useContext(UserContext);
    const [liveJobs, setLiveJobs] = useState([])
    

    // api call to get livejobs for logged in user
    useEffect(() => {
        getLiveJobs(user.user_id).then((liveJobsFromApi) => {
            setLiveJobs(liveJobsFromApi)
        })
    })

    const handleJobApproval = () => {
        // logic to call:
        // PATCH token_id - send booker and provider id (available) - how to select which token to patch?
        // POST create transaction (token_id - dont know to get / select first avail - & user_id from state
    }

	return (
		<StyledRegister>
			<div>
				<h1>Your Live Jobs</h1>
                <ul>
                    {liveJobs && liveJobs.map(jobs => {
                        console.log(jobs)
                        return (
                            <li>
                                <h3>{jobs.task_name}</h3>
                                <p>Description: {jobs.task_description}</p>
                                <p>Location: {jobs.location}</p>
                                <p>Date: {jobs.start_time}</p>
                                <button onClick={handleJobApproval}>Approve Job</button>
                            </li>
                        )
                    })}
                </ul>

            </div>
		</StyledRegister>
	);
}

const StyledRegister = styled.div`
	height: 80vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	h1 {
		position: absolute;
		top: 200px;
	}

	div {
		background-color: aliceblue;

		flex-direction: column;
		align-items: center;
		padding: 5rem 7rem;
		border-radius: 1rem;
		height: 80%;
		width: 60%;
	}

	.profile-img {
		width: 190px;
		border-radius: 50px;
	}
	.update-btn {
		margin: 10px;
	}
	p {
		margin: 10px;
	}
`;

export default MyTasks;
