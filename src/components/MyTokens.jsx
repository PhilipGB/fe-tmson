import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../Contexts/UserContext";
import { mintToken } from "../Utils/api-tokens-new";

function MyTokens(props) {
  const { tokens } = props;

  const { user, setUser } = useContext(UserContext);

  const mintCoin = () => {
    mintToken(1, user.user_id);
    window.alert(`New token successfully minted`);
  };

  return (
    <StyledProfile>
      <div className="container">
        <h1>{user.username}</h1>
        <img className="profile-img" src={user.avatar_url} />
        <h2>Your Tokens</h2>
        <ul>
          {tokens &&
            tokens.map((token) => {
              return (
                <li key={token.token_id}>
                  <h3>Token# {token.token_id}</h3>
                  <p>Minted on: {token.generated_date}</p>
                  <p>By: Minter No. {token.minter_id}</p>
                </li>
              );
            })}
        </ul>
        <div className="button">
          <button className="btn" onClick={() => mintCoin()}>
            Mint New Token
          </button>
        </div>
      </div>
    </StyledProfile>
  );
}

const StyledProfile = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  h1 {
    align-self: center;
    font-size: 2rem;
    margin: 1rem 0rem;
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 5rem 7rem;
    border-radius: 1rem;
    height: 80%;
    width: 60%;
    border: 0.15rem solid #45b480;
  }
  .profile-img {
    width: 190px;
    border-radius: 50px;
  }
  a {
    align-self: center;
    margin-top: 1rem;
  }
  h3 {
    margin: 1rem 0rem;
  }

  p {
    margin-bottom: 0.5rem;
  }
  .profile {
    background-color: aliceblue;
    flex-direction: column;
    align-items: center;
    padding: 5rem 7rem;
    border-radius: 1rem;
    height: 100%;
    width: 60%;
  }
  .update-btn {
    margin: 10px;
  }

  .button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
  }
`;

export default MyTokens;
