import React, { useEffect, useContext, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { UserContext } from '../Contexts/UserContext';
import { getUsersByUserName, patchUser } from '../Utils/users.api'
function UpdateProfile() {
  const emailRef = useRef();
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const bioRef = useRef();
  const avatarUrlRef = useRef();
  const postcodeRef = useRef();
  const dobRef = useRef();
  const addressRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [currentUser, setCurrentUser] = useState('');

  const id = 'WTDc83xcGehNejQjXEVf60Cboe23';

  const handleChange = (e) => {
    setCurrentUser({
      user_id: user.user_id,
      firebase_id: id,
      username: usernameRef.current.value,
      first_name: firstNameRef.current.value,
      last_name: lastNameRef.current.value,
      birth_date: dobRef.current.value,
      avatar_url: avatarUrlRef.current.value,
      address: addressRef.current.value,
      postcode: postcodeRef.current.value,
      email_address: emailRef.current.value,
      bio: bioRef.current.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getUsersByUserName(user.username).then((user) => {
      // setUserId(user.user_id);
    });
    // console.log(userId);
    patchUser(user.username, currentUser).then((res) => {
      setUser(currentUser);
    });

    navigate('/profile');
  };

  useEffect(() => {}, []);

  return (
    <StyledUpdateProfile>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <h1>Update Your Details</h1>
          <input
            onChange={handleChange}
            type='text'
            ref={firstNameRef}
            placeholder='First Name'
            defaultValue={user.first_name}
          />
          <input
            onChange={handleChange}
            type='text'
            ref={lastNameRef}
            placeholder='Last Name'
            defaultValue={user.last_name}
          />
          <input
            onChange={handleChange}
            type='email'
            ref={emailRef}
            placeholder='Email'
            defaultValue={user.email_address}
          />
          <input
            onChange={handleChange}
            type='text'
            ref={usernameRef}
            placeholder='Username'
            defaultValue={user.username}
          />

          <input
            onChange={handleChange}
            type='text'
            ref={avatarUrlRef}
            placeholder='Avatar Url'
            defaultValue={user.avatar_url}
          />
          <input
            onChange={handleChange}
            type='text'
            ref={addressRef}
            placeholder='Address'
            defaultValue={user.address}
          />
          <input
            onChange={handleChange}
            type='text'
            ref={postcodeRef}
            placeholder='Postcode'
            defaultValue={user.postcode}
          />
          <input
            onChange={handleChange}
            type='text'
            ref={bioRef}
            placeholder='Bio'
            defaultValue={user.bio}
          />
          <input
            onChange={handleChange}
            type='date'
            ref={dobRef}
            placeholder='Date Of Birth'
            defaultValue={user.birth_date}
          />
          <button className='btn' type='submit'>
            Submit
          </button>
        </form>
      </div>
    </StyledUpdateProfile>
  );
}

const StyledUpdateProfile = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;

  h1 {
    font-size: 2rem;
    margin: 1.5rem 0rem;
  }

  .container {
    margin: 2rem;
    border: 0.15rem solid #45b480;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 10rem 3rem;
    border-radius: 1rem;
    height: 90%;
    width: 40%;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5rem 7rem;
    border-radius: 1rem;
    height: 90%;
    width: 100%;
  }

  input {
    width: 15rem;
    height: 20%;
    margin-bottom: 0.7rem;
    padding: 1rem 1rem;
    background-color: black;
    color: white;
    border: 0.15rem solid #45b480;
    border-radius: 0.5rem;
    font-size: 1rem;
  }

  .btn {
    margin: 1rem 0rem;
  }

  a {
    text-decoration: none;
    color: #3ac2bb;
  }
`;

export default UpdateProfile;
