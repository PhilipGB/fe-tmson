import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../Contexts/AuthContext";
const ForgetPassword = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const emailRef = useRef();
  const { resetPassword, currentUser } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      resetPassword(emailRef.current.value);
      setMessage("Check Your Inbox For More Information");
    } catch {
      setError("Failed to Reset Password");
    }
    setLoading(false);
  };

  return (
    <StyledForget>
      <form onSubmit={handleSubmit}>
        <h2 className="password-header">Password Reset</h2>
        <h4>{message}</h4>
        <h4>{error}</h4>
        <input type="email" placeholder="Email" ref={emailRef} required />

        <button disabled={loading} id="reset" className="btn" type="submit">
          Reset Password
        </button>
        <p>
          <Link to="/">Login</Link>
        </p>
        <p>
          Don't have account? Click <Link to="/register">here</Link>
        </p>
      </form>
    </StyledForget>
  );
};
const StyledForget = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;

  h2 {
    font-size: 2rem;
    margin-bottom: 3.5rem;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10rem 10rem;
    height: 50%;
    border-radius: 1rem;
    margin-bottom: 20rem;
    border: 0.15rem solid #45b480;

    .logon-title {
      margin: 20px;
    }

    a {
      text-decoration: none;
      color: #3ac2bb;
    }
  }

  input {
    width: 35rem;
    margin-bottom: 1rem;
    padding: 1.5rem 1rem;
    background-color: black;
    color: white;
    border: 0.15rem solid #45b480;
    border-radius: 0.5rem;
    font-size: 1rem;
    margin-top: 1.5rem;
  }

  #reset {
    display: inline-block;
    margin: 0.5rem;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  p {
    margin-bottom: 0.5rem;
  }
`;

export default ForgetPassword;
