import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Login = () => {
  return (
    <StyledLogin>
      <form>
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Password" />
        <Link to="/home" className="btn" id="login">
          Login
        </Link>
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
    border-radius: 1rem;
  }

  input {
    width: 25rem;
    margin-bottom: 0.7rem;
    padding: 1rem 1rem;
    border: 1px solid black;
  }

  #login {
    display: inline-block;
    margin: 0.5rem;
  }
`;

export default Login;
