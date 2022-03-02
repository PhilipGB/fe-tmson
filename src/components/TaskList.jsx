import React, { useEffect, useState } from 'react'
import {getTasks} from '../Utils/api-filterjobs'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'
import styled from "styled-components";

// add Links to specific task pages
// or Link to booking page


const TaskList = () => {
    
    // get params from URL
    const [tasks, SetTasks] = useState([])
    const [orderBy, setOrderBy] = useState('desc')
    const [sortBy, setSortBy] = useState('')

    const handleSortBy = (e) => {
        console.log(e.target.value)
        setSortBy(e.target.value)
    }

    useEffect(() => {
        getTasks(orderBy, sortBy).then((taksFromApi) => {
            SetTasks(taksFromApi)
        })
    }, [orderBy, sortBy])

    return (

        <main>
            <StyledForm>
      <select name="" id="">
        <option value="filter" disabled="disabled">
          Filter
        </option>
        <option value="filter">Distance</option>
        <option value="filter">Availability</option>
      </select>
      <select name="sortList" id="sortList" value={sortBy} onChange={handleSortBy} >
        <option value="sort" disabled="disabled">
          Sort By
        </option>
        <option value="start_time">Start Time</option>
        <option value="end_time">End Time</option>
      </select>
    </StyledForm>
            <h2> Tasks </h2>
            <ul>
                {tasks.map(task => {
                    return (
                        <li key={task.task_id}>
                            <p>Task No. {task.task_id}</p>
                            <p>Skill_Id: {task.skill_id}</p>
                            <p>Task Start-time: {task.start_time}</p>
                            <p>Task End-time: {task.end_time}</p>
                            <p>Task Location: {task.location}</p>
                        </li>
                    )
                })}
            </ul>
        </main>
        
    )
}

const StyledForm = styled.form`
  display: flex;
  background-color: black;
  align-items: center;
  justify-content: center;
  min-height: 3rem;
  input {
    padding: 0.5rem 0rem;
    width: 20rem;
  }
  button {
    margin: 0rem 0.5rem;
  }
  select {
    padding: 0.4rem 3rem;
    margin: 0rem 0.3rem;
  }`

export default TaskList;