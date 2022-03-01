import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { UserContext } from '../Contexts/UserContext';
import { getUsers } from '../utils/users.api';
function Profile() {
	const { user, setUser } = useContext(UserContext);

	useEffect(() => {
		getUsers();
	}, []);
	return (
		<StyledRegister>
			<div>
				<h1>Your Profile</h1>
				<img className="profile-img" src={user.avatar_url} />
				<p>First Name: {user.first_name}</p>
				<p>Last Name: {user.last_name}</p>
				<p>Date of Birth: {user.birth_date}</p>
				<p>Address: {user.address}</p>
				<p>Postcode: {user.postcode}</p>
				<p>Email: {user.email_address}</p>
				<p>Bio: {user.bio}</p>

				<button className="update-btn">
					<Link to={`/profile/${user.username}`}>Update Your Details</Link>
				</button>
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

export default Profile;
