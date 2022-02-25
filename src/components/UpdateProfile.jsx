import React, { useEffect, useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { UserContext } from '../Contexts/UserContext';
import { getUsers } from '../utils/api';
function UpdateProfile() {
	const emailRef = useRef();
	const { user, setUser } = useContext(UserContext);
	const firstNameRef = useRef();
	const lastNameRef = useRef();
	const bioRef = useRef();
	const avatarUrlRef = useRef();
	const postcodeRef = useRef();
	const dobRef = useRef();
	const addressRef = useRef();
	const usernameRef = useRef();
	const passwordRef = useRef();

	return (
		<StyledRegister>
			<div>
				<form>
					<h1>Update Your Details</h1>
					<input
						// onChange={handleChange}
						type="text"
						// ref={firstNameRef}
						placeholder="First Name"
						required
					/>
					<input
						// onChange={handleChange}
						type="text"
						// ref={lastNameRef}
						placeholder="Last Name"
						required
					/>
					<input
						// onChange={handleChange}
						type="email"
						// ref={emailRef}
						placeholder="Email"
						required
					/>
					<input
						// onChange={handleChange}
						type="text"
						// ref={usernameRef}
						placeholder="Username"
						required
					/>
					<input
						// onChange={handleChange}
						type="password"
						ref={passwordRef}
						placeholder="Password"
						required
					/>
					<input
						// onChange={handleChange}
						type="text"
						ref={avatarUrlRef}
						placeholder="Avatar Url"
						required
					/>
					<input
						// onChange={handleChange}
						type="text"
						ref={addressRef}
						placeholder="Address"
						required
					/>
					<input
						// onChange={handleChange}
						type="text"
						ref={postcodeRef}
						placeholder="Postcode"
						required
					/>
					<input
						// onChange={handleChange}
						type="text"
						ref={bioRef}
						placeholder="Bio"
						required
					/>
					<input
						// onChange={handleChange}
						type="date"
						ref={dobRef}
						placeholder="Date Of Birth"
						required
					/>
					<button type="submit">Submit</button>
					{/* <p>
						Already have an account? Click <Link to="/">here</Link>
					</p> */}
				</form>
			</div>
		</StyledRegister>
	);
}

const StyledRegister = styled.div`
	height: 80vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	justify-content: center;

	h1 {
		margin-bottom: 2rem;
	}

	div {
		margin-top: 2rem;
		background-color: aliceblue;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 5rem 7rem;
		border-radius: 1rem;
		height: 100%;
		width: 70%;
	}
	form {
		background-color: aliceblue;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 5rem 7rem;
		border-radius: 1rem;
		height: 50%;
		width: 100%;
	}

	input {
		width: 15rem;
		height: 20%;
		margin-bottom: 0.7rem;
		padding: 1rem 1rem;
		border: 1px solid black;
	}

	#register {
		display: inline-block;
		padding: 0.6rem 1.5rem;
		background-color: #e7e7e7;
		border-radius: 1rem;
		border: 1px black solid;
		margin: 0.5rem;
	}
`;

export default UpdateProfile;
