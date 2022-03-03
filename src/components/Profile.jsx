import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../Contexts/UserContext";
function Profile() {
  const { user, setUser } = useContext(UserContext);

  return (
    <StyledProfile>
      <div>
        <h1>Your Profile</h1>
        <img className="profile-img" src={user.avatar_url} />
        <p>First Name: {user.first_name}</p>
        <p>Last Name: {user.last_name}</p>
        <p>Date of Birth: {user.birth_date}</p>
        <p>Address: {user.address}</p>
        <p>Postcode: {user.postcode}</p>
        <p>Email: {user.email_address}</p>
        <p>Bio: {user.bio}</p>

        <Link to={`/profile/${user.username}`} className="btn">
          Update Your Details
        </Link>
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

  div {
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
  p {
    margin: 10px;
  }
`;

export default Profile;
