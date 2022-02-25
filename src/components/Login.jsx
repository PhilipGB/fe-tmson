import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../Contexts/AuthContext';
const Login = () => {
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const emailRef = useRef();
	const passwordRef = useRef();
	const { login, currentUser } = useAuth();
	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();

		try {
			setError('');
			setLoading(true);
			login(emailRef.current.value, passwordRef.current.value);
			console.log(currentUser);
			navigate('/home');
		} catch {
			setError('Failed to login');
		}
		setLoading(false);
	};

	return (
		<StyledLogin>
			<form onSubmit={handleSubmit}>
				<input type="email" placeholder="Email" ref={emailRef} required />
				<input
					type="password"
					placeholder="Password"
					ref={passwordRef}
					required
				/>
				<button disabled={loading} id="login" type="submit">
					Log In
				</button>
				<p>
					<Link to="forget-password">Forget Password</Link>
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

export default Login;
