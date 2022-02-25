import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../Contexts/AuthContext';
/*
  username: "TestUser",
      first_name: "Test",
      last_name: "User",
      birth_date: "2000-01-01T00:00:00.000Z",
      avatar_url:
        "https://robohash.org/exercitationemillumlibero.png?size=50x50&set=set1",
      address: "2 Test Place",
      postcode: "T3 5TS",
      email_address: "TestUser@wordpress.org",
      bio: "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",

*/
const Register = () => {
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const emailRef = useRef();
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
	const handleSubmit = (e) => {
		e.preventDefault();

		try {
			setError('');
			setLoading(true);
			signUp(emailRef.current.value, passwordRef.current.value);
			console.log(currentUser);

			navigate('/home');
		} catch (err) {
			console.log(err);
			setError('Failed to create account');
		}
		setLoading(false);
	};
	return (
		<StyledRegister>
			<div>
				<form onSubmit={handleSubmit}>
					<h1>Sign Up</h1>
					{error}
					<input
						type="text"
						ref={firstNameRef}
						placeholder="First Name"
						required
					/>
					<input
						type="text"
						ref={lastNameRef}
						placeholder="Last Name"
						required
					/>
					<input type="email" ref={emailRef} placeholder="Email" required />
					<input
						type="text"
						ref={usernameRef}
						placeholder="Username"
						required
					/>
					<input
						type="password"
						ref={passwordRef}
						placeholder="Password"
						required
					/>
					<input
						type="text"
						ref={avatarUrlRef}
						placeholder="Avatar Url"
						required
					/>
					<input type="text" ref={usernameRef} placeholder="Address" required />
					<input
						type="text"
						ref={postcodeRef}
						placeholder="Postcode"
						required
					/>
					<input type="text" ref={bioRef} placeholder="Bio" required />
					<input
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

	h1 {
		margin-bottom: 2rem;
	}

	div {
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
