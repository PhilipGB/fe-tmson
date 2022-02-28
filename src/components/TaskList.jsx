import React, { useEffect, useState } from 'react'
import {getTasks} from '../Utils/api'

const TaskList = (props) => {
    
    // get params from URL
    const {orderBy, sortBy, searchTerm } = props
    const [tasks, SetTasks] = useState([])

    useEffect(() => {
        getTasks(searchTerm, orderBy, sortBy).then((taksFromApi) => {
            SetTasks(taksFromApi)
        })
    }, [searchTerm, orderBy, sortBy])

    return (

        <main>
            <h2> Tasks </h2>
            <ul>
                {tasks.map(task => {
                    console.log(task)
                    return (
                        <li>
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

export default TaskList;