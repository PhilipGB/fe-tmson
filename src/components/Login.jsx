import React, { useRef, useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../Contexts/UserContext';
import styled from 'styled-components';
import { useAuth } from '../Contexts/AuthContext';
import { getUsers } from '../utils/users.api';
const Login = () => {
	const emailRef = useRef();
	const passwordRef = useRef();
	const {
		login,
		currentUser,
		id,
		setCurrentUser,
		logout,
		isLogged,
		setIsLogged,
	} = useAuth();
	const { user, setUser } = useContext(UserContext);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const [error, setError] = useState('');
	const placeHolderId = 'WTDc83xcGehNejQjXEVf60Cboe23';
	const [users, setUsers] = useState([]);
	useEffect(() => {
		getUsers().then(({ users }) => {
			setUsers(users);
		});
	}, []);
	const handleSubmit = (e) => {
		e.preventDefault();
		login(emailRef.current.value, passwordRef.current.value).catch((err) => {
			setError(err.code);
		});
		users.map((user) => {
			if (currentUser) {
				if (user.email_address === emailRef.current.value) {
					if ('WTDc83xcGehNejQjXEVf60Cboe23' === placeHolderId) {
						setIsLogged(true);
						setLoading(true);
						setUser(user);
						navigate('/home');
					} else {
						setIsLogged(false);
						alert('Wrong Details, Try Again');
						navigate('/');
					}
				}
			}
		});
	};
	return (
		<StyledLogin>
			<form onSubmit={handleSubmit}>
				<h2 className="logon-title">Log in</h2>
				<h2>{error.slice(5)}</h2>
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
		height: 60%;
		border-radius: 1rem;
		.logon-title {
			margin: 20px;
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

export default Login;
