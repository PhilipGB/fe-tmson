import React, { useRef, useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../Contexts/UserContext";
import styled from "styled-components";
import { useAuth } from "../Contexts/AuthContext";
import { getUsers } from "../utils/users.api";
const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const {
    login,
    currentUser,
    id,
    setCurrentUser,
    logout,
    isLogged,
    setIsLogged,
  } = useAuth();
  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const placeHolderId = "WTDc83xcGehNejQjXEVf60Cboe23";
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers().then(({ users }) => {
      setUsers(users);
    });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    login(emailRef.current.value, passwordRef.current.value).catch((err) => {
      setError(err.code);
    });
    users.map((user) => {
      if (currentUser) {
        if (user.email_address === emailRef.current.value) {
          if ("WTDc83xcGehNejQjXEVf60Cboe23" === placeHolderId) {
            setIsLogged(true);
            setLoading(true);
            setUser(user);
            navigate("/home");
          } else {
            setIsLogged(false);
            alert("Wrong Details, Try Again");
            logout();
            navigate("/");
          }
        }
      }
    });
  };
  return (
    <StyledLogin>
      <form onSubmit={handleSubmit}>
        <h2 className="logon-title">Log In</h2>
        <h2>{error.slice(5)}</h2>
        <input type="email" placeholder="Email" ref={emailRef} required />
        <input
          type="password"
          placeholder="Password"
          ref={passwordRef}
          required
        />
        <button disabled={loading} id="login" className="btn" type="submit">
          Login
        </button>
        <p>
          <Link to="forget-password">Forget Password</Link>
        </p>
        <p>
          Don't have account? Click <Link to="/register">here</Link>
        </p>
      </form>
    </StyledLogin>
  );
};
const StyledLogin = styled.div`
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
  }

  #login {
    display: inline-block;
    margin: 0.5rem;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  p {
    margin-bottom: 0.5rem;
  }
`;

export default Login;
