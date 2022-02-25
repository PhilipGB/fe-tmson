import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useAuth } from '../Contexts/AuthContext';
const variants = {
	open: { opacity: 1, x: 0 },
	closed: { opacity: 0, x: '-100%' },
};

const Nav = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { logout, currentUser } = useAuth();
	const handleLogOut = () => {
		if (currentUser) {
			logout();
		}
	};
	return (
		<StyledNav>
			<StyledHamburger onClick={() => setIsOpen((isOpen) => !isOpen)}>
				<div></div>
				<div></div>
				<div></div>
			</StyledHamburger>
			{currentUser ? (
				<h3 className="welcome-msg">Hello {currentUser.email}</h3>
			) : (
				''
			)}
			<StyledMenu
				animate={isOpen ? 'open' : 'closed'}
				variants={variants}
			></StyledMenu>
			<h1>Logo</h1>
			{currentUser ? (
				<button className="logout-btn" onClick={handleLogOut}>
					Log out
				</button>
			) : (
				''
			)}
		</StyledNav>
	);
};

const StyledHamburger = styled.div`
	width: 2rem;
	z-index: 5;
	div {
		height: 5px;
		width: 100%;
		background: #b80202;
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
	}
	.logout-btn {
		position: absolute;
		right: 40px;
	}
	.welcome-msg {
		position: absolute;
		left: 90px;
	}
`;
const StyledMenu = styled(motion.div)`
	position: absolute;
	top: 0;
	left: 0;
	width: 30rem;
	height: 100vw;
	background-color: #000000cc;
`;
export default Nav;
