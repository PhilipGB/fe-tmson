import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Register = () => {
  return (
    <StyledRegister>
      <form>
        <h1>Sign Up</h1>
        <input type="text" placeholder="Full Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Password" />
        <Link to="/home" className="btn" id="register">
          Register
        </Link>
      </form>
    </StyledRegister>
  );
};

const StyledRegister = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin-bottom: 2rem;
  }

  form {
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5rem 7rem;
    border-radius: 1rem;
  }

  input {
    width: 25rem;
    margin-bottom: 0.7rem;
    padding: 1rem 1rem;
    border: 1px solid black;
  }

  #register {
    display: inline-block;
    margin: 0.5rem;
  }
`;

export default Register;
