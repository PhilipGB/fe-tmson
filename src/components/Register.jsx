import React, { useContext, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../Contexts/AuthContext';
import { UserContext } from '../Contexts/UserContext';
import { postUser } from '../utils/api';
const Register = () => {
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
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
	const { signUp, currentUser } = useAuth();
	const navigate = useNavigate();

	const handleChange = (e) => {
		setUser({
			username: usernameRef.current.value,
			first_name: firstNameRef.current.value,
			last_name: lastNameRef.current.value,
			birth_date: dobRef.current.value,
			avatar_url: avatarUrlRef.current.value,
			address: addressRef.current.value,
			postcode: postcodeRef.current.value,
			email_address: emailRef.current.value,
			bio: bioRef.current.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		postUser(user);
		signUp(emailRef.current.value, passwordRef.current.value);
		navigate('/home');
	};
	return (
		<StyledRegister>
			<div>
				<form onSubmit={handleSubmit}>
					<h1>Sign Up</h1>
					{error}
					<input
						onChange={handleChange}
						type="text"
						ref={firstNameRef}
						placeholder="First Name"
						required
					/>
					<input
						onChange={handleChange}
						type="text"
						ref={lastNameRef}
						placeholder="Last Name"
						required
					/>
					<input
						onChange={handleChange}
						type="email"
						ref={emailRef}
						placeholder="Email"
						required
					/>
					<input
						onChange={handleChange}
						type="text"
						ref={usernameRef}
						placeholder="Username"
						required
					/>
					<input
						onChange={handleChange}
						type="password"
						ref={passwordRef}
						placeholder="Password"
						required
					/>
					<input
						onChange={handleChange}
						type="text"
						ref={avatarUrlRef}
						placeholder="Avatar Url"
						required
					/>
					<input
						onChange={handleChange}
						type="text"
						ref={addressRef}
						placeholder="Address"
						required
					/>
					<input
						onChange={handleChange}
						type="text"
						ref={postcodeRef}
						placeholder="Postcode"
						required
					/>
					<input
						onChange={handleChange}
						type="text"
						ref={bioRef}
						placeholder="Bio"
						required
					/>
					<input
						onChange={handleChange}
						type="date"
						ref={dobRef}
						placeholder="Date Of Birth"
						required
					/>
					<button disabled={loading} type="submit">
						Register
					</button>
					<p>
						Already have an account? Click <Link to="/">here</Link>
					</p>
				</form>
			</div>
		</StyledRegister>
	);
};

const StyledRegister = styled.div`
	height: 80vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;

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
		width: 60%;
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

export default Register;
