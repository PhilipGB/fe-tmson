import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const CreateJob = () => {
  return (
    <>
      <Nav />
      <StyledCreateJob>
        <form>
          <h1>Create Job</h1>
          <input type="text" placeholder="Job Name: " />
          <input type="text" placeholder="Description: " />
          <input type="text" placeholder="Hours: " />
          <input type="text" placeholder="Location: " />
          <Link to="/home" className="btn" id="create">
            Create
          </Link>
        </form>
      </StyledCreateJob>
    </>
  );
};

const StyledCreateJob = styled.div`
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

  #create {
    display: inline-block;
    margin: 0.5rem;
  }
`;

export default CreateJob;
