import {
	animationLinks,
	hamburgerAnimation,
	lineOne,
	lineThree,
	lineTwo,
} from '../animation';
import { image6 } from '../images';
import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../Contexts/UserContext';
import { motion } from 'framer-motion';
import { useAuth } from '../Contexts/AuthContext';
import { Link } from 'react-router-dom';
import logo from '../Logo';
const variants = {
	open: { opacity: 1, x: 0 },
	closed: { opacity: 0, x: '-100%' },
};

const Nav = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { logout, currentUser, isLogged, setIsLogged } = useAuth();
	const { user, setUser } = useContext(UserContext);

	const handleLogOut = () => {
		if (currentUser) {
			logout();
			setIsLogged(false);
			setIsOpen(false);
		}
	};

	return (
		<StyledNavContainer>
			<StyledNav>
				<StyledHamburger onClick={() => setIsOpen((isOpen) => !isOpen)}>
					<motion.div
						animate={isOpen ? 'open' : ''}
						variants={lineOne}
					></motion.div>
					<motion.div
						animate={isOpen ? 'open' : 'closed'}
						variants={lineTwo}
					></motion.div>
					<motion.div
						animate={isOpen ? 'open' : ''}
						variants={lineThree}
					></motion.div>
				</StyledHamburger>
				{currentUser && isLogged ? (
					<h3 className="welcome-msg"> Hello {user.first_name}</h3>
				) : (
					''
				)}
				<Link className="nav-link" to="/profile">
					{isLogged ? (
						<img className="profile-img-nav" src={user.avatar_url} />
					) : (
						''
					)}
					{isLogged ? <p className="nav-username">{user.username}</p> : ''}
				</Link>
				<StyledMenu
					animate={isOpen ? 'open' : 'closed'}
					variants={hamburgerAnimation}
				>
					<ul>
						{isLogged && currentUser ? (
							<Link to="/profile" onClick={() => setIsOpen(false)}>
								<motion.li
									variants={animationLinks}
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}
								>
									My Account
								</motion.li>
							</Link>
						) : (
							''
						)}
						<motion.li
							variants={animationLinks}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
						>
							Tokens
						</motion.li>
						<motion.li
							variants={animationLinks}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
						>
							Jobs
						</motion.li>
						{isLogged ? (
							<Link to="/" onClick={handleLogOut}>
								<motion.li
									variants={animationLinks}
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}
								>
									Logout
								</motion.li>
							</Link>
						) : (
							''
						)}
					</ul>
				</StyledMenu>
				<Link to="/home">
					<img className="logo" src={logo} alt="task" />
				</Link>
			</StyledNav>
		</StyledNavContainer>
	);
};

const StyledNavContainer = styled.div`
	background-color: black;
	a {
		text-decoration: none;
	}
`;

const StyledHamburger = styled.div`
	width: 2rem;
	z-index: 11;
	div {
		height: 5px;
		width: 100%;
		background: #45b480;
		margin: 5px 0px;
	}
`;
const StyledNav = styled(motion.nav)`
	width: 51vw;
	min-height: 10vh;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0rem 2rem;
	h1 {
		font-size: 3rem;
		color: #45b480;
	}
	h3 {
		color: white;
	}
	.profile-img-nav {
		width: 4%;
		position: absolute;
		right: 10px;
		top: 10px;
	}
	.nav-username {
		position: absolute;
		right: 79px;
		top: 29px;
		color: white;
	}
	.welcome-msg {
		position: absolute;
		left: 100px;
	}
	.nav-link {
		text-decoration: none;
		color: black;
	}
	.logo {
		width: 26%;
		// display: flex;
		// justify-content: center;
		// align-items: center;
		position: absolute;
		right: 500px;
		top: -40px;
		margin-bottom: 30px;
	}
`;
const StyledMenu = styled(motion.div)`
	position: absolute;
	top: 0;
	left: 0;
	width: 30rem;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 0rem 4rem;
	z-index: 10;
	background-color: #313131cc;
	ul {
		width: 100%;
	}
	a {
		text-decoration: none;
	}
	li {
		width: 100%;
		height: 5rem;
		margin-bottom: 5rem;
		list-style: none;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		font-size: 1.8rem;
		border: 0.15rem solid white;
		border-radius: 1rem;
		transition: all 0.1s ease;
		&:hover {
			border: 3px solid #45b480;
			color: #45b480;
		}
		&:active {
			color: #3ac2bb;
			border: 5px solid #3ac2bb;
		}
	}
`;

export default Nav;
