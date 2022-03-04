// this will sit in the user profile hamgburger menu

import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { UserContext } from '../Contexts/UserContext';
import { getLiveJobs, patchTaskToComplete, patchTokenOwner, postNewTransaction } from '../Utils/api-tokens-new';

// possibly add section that only shows is user has a minter_id - allows to mint new token

function MyTasks(props) {

     // const { user, setUser } = useContext(UserContext);
	const [user, setUser] = useState({
		user_id: 5,
		username: 'oscarJames24',
	})
    const [liveJobs, setLiveJobs] = useState([])
	const {tokens} = props;
	const tokenToPatch = tokens[0].token_id

    useEffect(() => {
        getLiveJobs(user.user_id).then((liveJobsFromApi) => {
			console.log(liveJobsFromApi)
            setLiveJobs(liveJobsFromApi)
        })
    }, [])

    const handleJobApproval = (provider_id, task_id) => {
		console.log(provider_id)
		console.log(tokenToPatch)
		console.log(task_id)

		postNewTransaction({
		token_id: tokenToPatch,
		task_id: task_id
   		})

		patchTokenOwner(provider_id, tokenToPatch)

	   	patchTaskToComplete(task_id)
	   	// returns task details
	}

	return (
		<StyledProfile>
			<div>
				<h1>Your Live Jobs</h1>
                <ul>
                    {liveJobs && liveJobs.map(jobs => {
                        console.log(jobs)
						console.log(liveJobs)
                        return (
                            <li key={jobs.task_id}>
                                <h3>{jobs.task_name}</h3>
                                <p>Description: {jobs.task_description}</p>
                                <p>Location: {jobs.location}</p>
                                <p>Date: {jobs.start_time}</p>
                                <button onClick={() => handleJobApproval(jobs.provider_id, jobs.task_id)}>Approve Job</button>
                            </li>
                        )
                    })}
                </ul>

            </div>
		</StyledProfile>
	);
}

const StyledProfile = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  h1 {
    align-self: center;
    font-size: 2rem;
    margin: 1rem 0rem;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 5rem 7rem;
    border-radius: 1rem;
    height: 80%;
    width: 60%;
    border: 0.15rem solid #45b480;
  }
  .profile-img {
    width: 190px;
    border-radius: 50px;
  }
  a {
    align-self: center;
    margin-top: 1rem;
  }
  p {
    margin: 10px;
  }
  .profile {
    background-color: aliceblue;
    flex-direction: column;
    align-items: center;
    padding: 5rem 7rem;
    border-radius: 1rem;
    height: 100%;
    width: 60%;
  }
  .update-btn {
    margin: 10px;
  }
`;

export default MyTasks;
