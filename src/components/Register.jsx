import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../Contexts/AuthContext';

const Register = () => {
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const emailRef = useRef();
	const passwordRef = useRef();
	const usernameRef = useRef();
	const fullNameRef = useRef();
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
			<form onSubmit={handleSubmit}>
				<h1>Sign Up</h1>
				{error}
				<input type="text" ref={fullNameRef} placeholder="Full Name" required />
				<input type="email" ref={emailRef} placeholder="Email" required />
				<input type="text" ref={usernameRef} placeholder="Username" required />
				<input
					type="password"
					ref={passwordRef}
					placeholder="Password"
					required
				/>
				<button disabled={loading} type="submit">
					Register
				</button>
				<p>
					Already have an account? Click <Link to="/">here</Link>
				</p>
			</form>
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

	form {
		background-color: aliceblue;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 5rem 7rem;
		border-radius: 1rem;
	}

	input {
		width: 25rem;
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
