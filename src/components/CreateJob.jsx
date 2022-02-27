import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from 'react'
import { postNewTask } from "../Utils/api";


const CreateJob = () => {
  const [taskName, setTaskName] = useState({})
  const [category, setCategory] = useState({})
  const [subCategory, setSubCategory] = useState({})
  const [description, setDescription]= useState({})
  const [startTime, setStartTime] = useState({})
  const [endTime, setEndTime] = useState({})
  const [location, setLocation] = useState({})

const handleTaskName = (e) => {
    console.log(e.target.value)
    setTaskName(e.target.value)
  }
const handleCategory = (e) => {
    console.log(e.target.value)
    setCategory(e.target.value)  
}

const handleSubCategory = (e) => {
  const parseCatId = parseInt(e.target.value)
  console.log(parseCatId)
  setSubCategory(parseCatId)
}
const handleDescription = (e) => {
  console.log(e.target.value)
  setDescription(e.target.value)
}
const handleStartTime = (e) => {
  console.log(e.target.value)
  setStartTime(e.target.value)
}
const handleEndTime = (e) => {
  console.log(e.target.value)
  setEndTime(e.target.value)
}
const handleLocation = (e) => {
  console.log(e.target.value)
  setLocation(e.target.value)
}
const handleSubmit = (e) => {
  e.preventDefault()
  const postedTask = {
    //"task": taskName,
    "booker_id": 1,
    "skill_id": subCategory,
    //"description": description,
    "start_time": startTime,
    "end_time": endTime,
    "location": location
  }
  console.log(postedTask)
  postNewTask(postedTask)
}

  return (
    <StyledCreateJob>
      <form className="CreateJob__form" onSubmit={handleSubmit}>
        <h1>Post your job</h1>
        <input id='taskName' type="text" onChange={(e) => handleTaskName(e)} placeholder="Task Name: " />
        <select id="Category" required placeholder="Category: " onChange={(e) => handleCategory(e)}>
          <option>languages</option>
          <option>household</option>
          <option>errands</option>
          <option>music</option>
          <option>coding</option>
        </select>
        <select id="Sub-category" required placeholder="Sub-category: " onChange={(e) => handleSubCategory(e)}>
          <option value="1">French</option>
          <option>Russian</option>
          <option value="2">German</option>
          <option>Spanish</option>
          <option>Cleaning</option>
        </select>
        <input type="text" required placeholder="Description: " onChange={(e) => handleDescription(e)} />
        <input type="datetime-local" placeholder="Start" onChange={(e) => handleStartTime(e)}/>
        <input type="datetime-local" placeholder="Finish" onChange={(e) => handleEndTime(e)}/>
        <input type="text" minLength="3" maxLength="3" required placeholder="Location: " onChange={(e) => handleLocation(e)} />
        <button className="Button" type="submit"> Post new task </button>
      </form>
    </StyledCreateJob>
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
    padding: 0.6rem 1.5rem;
    background-color: #e7e7e7;
    border-radius: 1rem;
    border: 1px black solid;
    margin: 0.5rem;
  }
`;

export default CreateJob;
