import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { UserContext } from '../Contexts/UserContext';


function MyTokens(props) {

	const {tokens} = props

	const { user, setUser } = useContext(UserContext);



	return (
		<StyledRegister>
			<div>
				<h1>{user.username}</h1>
				<img className="profile-img" src={user.avatar_url} />
				<h1>Your Tokens</h1>
				<ul>
					{tokens && tokens.map(token => {
						console.log(token)
						return (
							<li>
								<h3>Token number: {token.token_id}</h3>
								<p>Minted on: {token.generated_date}</p>
								<p>By: Minter No. {token.minter_id}</p>
							</li>
						)
					})}
				</ul>
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

export default MyTokens;
