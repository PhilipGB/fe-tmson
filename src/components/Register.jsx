import React, { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../Contexts/AuthContext";
import { UserContext } from "../Contexts/UserContext";
import { postUser } from "../utils/users.api";
const Register = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const { user, setUser } = useContext(UserContext);
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const bioRef = useRef();
  const avatarUrlRef = useRef();
  const postcodeRef = useRef();
  const dobRef = useRef();
  const addressRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const { signUp, currentUser } = useAuth();
  const navigate = useNavigate();
  const id = "Qn5aXPnHq6VvA6IMGuWh9DYKzT82";

  const handleChange = (e) => {
    setUser({
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
    postUser(user).then(() => {
      signUp(emailRef.current.value, passwordRef.current.value);
      navigate("/home");
    });
  };
  return (
    <StyledRegister>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          {error}
          <input
            onChange={handleChange}
            type="text"
            ref={firstNameRef}
            placeholder="First Name"
            required
          />
          <input
            onChange={handleChange}
            type="text"
            ref={lastNameRef}
            placeholder="Last Name"
            required
          />
          <input
            onChange={handleChange}
            type="email"
            ref={emailRef}
            placeholder="Email"
            required
          />
          <input
            onChange={handleChange}
            type="text"
            ref={usernameRef}
            placeholder="Username"
            required
          />
          <input
            onChange={handleChange}
            type="password"
            ref={passwordRef}
            placeholder="Password"
            required
          />
          <input
            onChange={handleChange}
            type="text"
            ref={avatarUrlRef}
            placeholder="Avatar Url"
            required
          />
          <input
            onChange={handleChange}
            type="text"
            ref={addressRef}
            placeholder="Address"
            required
          />
          <input
            onChange={handleChange}
            type="text"
            ref={postcodeRef}
            placeholder="Postcode"
            required
          />
          <input
            onChange={handleChange}
            type="text"
            ref={bioRef}
            placeholder="Bio"
            required
          />
          <input
            onChange={handleChange}
            type="date"
            ref={dobRef}
            placeholder="Date Of Birth"
            required
          />
          <button disabled={loading} className="btn" type="submit">
            Register
          </button>
          <p>
            Already have an account? Click <Link to="/">here</Link>
          </p>
        </form>
      </div>
    </StyledRegister>
  );
};

const StyledRegister = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;

  h1 {
    font-size: 2rem;
    margin: 1rem 0rem;
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

  #register {
    display: inline-block;
    padding: 0.6rem 1.5rem;
    border-radius: 1rem;
    border: 1px black solid;
    margin: 0.5rem;
    font-size: 1.5rem;
  }

  .btn {
    margin: 1rem 0rem;
  }

  a {
    text-decoration: none;
    color: #3ac2bb;
  }
`;

export default Register;
