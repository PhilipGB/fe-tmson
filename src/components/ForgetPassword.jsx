import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../Contexts/AuthContext';
const ForgetPassword = () => {
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState('');
	const emailRef = useRef();
	const { resetPassword, currentUser } = useAuth();
	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();

		try {
			setMessage('');
			setError('');
			setLoading(true);
			resetPassword(emailRef.current.value);
			setMessage('Check Your Inbox For More Information');
		} catch {
			setError('Failed to Reset Password');
		}
		setLoading(false);
	};

	return (
		<StyledLogin>
			<form onSubmit={handleSubmit}>
				<h2 className="password-header">Password Reset</h2>
				<h4>{message}</h4>
				<h4>{error}</h4>
				<input type="email" placeholder="Email" ref={emailRef} required />

				<button disabled={loading} id="login" type="submit">
					Reset Password
				</button>
				<p>
					<Link to="/">Login</Link>
				</p>
				<p>
					Don't have account? Click <Link to="/register">here</Link>
				</p>
			</form>
		</StyledLogin>
	);
};
const StyledLogin = styled.div`
	height: 80vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	form {
		background-color: aliceblue;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 10rem 10rem;
		border-radius: 1rem;
		.password-header {
			margin: 10px;
		}
	}

	input {
		width: 25rem;
		margin-bottom: 0.7rem;
		padding: 1rem 1rem;
		border: 1px solid black;
	}

	#login {
		display: inline-block;
		padding: 0.6rem 1.5rem;
		background-color: #e7e7e7;
		border-radius: 1rem;
		border: 1px black solid;
		margin: 0.5rem;
	}
`;

export default ForgetPassword;
