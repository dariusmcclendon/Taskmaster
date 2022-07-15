// Dashboard for viewing projects and tasks at a glance. Should populate projects and tasks via fetch request

//imports
import React, { useState, useEffect,useContext } from 'react'
import { Card, Container, Button, Row, Col} from 'react-bootstrap'
import { Navigate, useNavigate } from 'react-router-dom'
import TaskList from '../components/TaskList'
import ProjectCarousel from '../components/ProjectCarousel'
import {CurrentUser} from '../contexts/currentUser'

export default function Dashboard(props){
    // state variables
    let [projects, setProjects] = useState([])
    let [tasks, setTasks] = useState([])
    let [dueToday, setDueToday] = useState([])
    let [upComing, setUpcoming] = useState([])
    let [update, setUpdate] = useState(false)
    let {currentUser} = useContext(CurrentUser)
    let navigate = useNavigate()
    let date = new Date()
    // runs fetch request for user's projects, refreshes when tasks, projects, or currentUser is changed
    useEffect(()=>{
        if(currentUser){
            fetchProjects()
            fetchTasks()
        }
    },[update,currentUser])

    let fetchProjects = async ()=>{
        let response = await fetch(`http://localhost:3000/api/users/${currentUser.user_id}/projects`)
        let data = await response.json()
        setProjects(data)
    } // end FetchProjects

    // Function to fetch tasks assigned to currentUser. Also checks what's due today.
    let fetchTasks = async ()=>{
        let response = await fetch(`http://localhost:3000/api/users/${currentUser.user_id}/tasks/assigned/`)
        let data = await response.json()
        setTasks(data)
        // filter through the tasks received and add them to the dueDay array
        let dueDay = data.filter((task)=>{
            let taskDate = new Date(task.dueDate)
                    return (taskDate.getDate() == date.getDate() && taskDate.getMonth() == date.getMonth())
        })
        setDueToday(dueDay) // set DueToday to the new dueDay array
        let isComing = data.filter((task)=>{
            let taskDate = new Date(task.dueDate)
                return (taskDate.getDate() <= (date.getDate()+7))
        })
        setUpcoming(isComing)
    } // end FetchTasks

    // Function to pass to ProjectCarousel. Sets currentProject to the project clicked and redirects user to the project board.
    let viewClick = (project)=>{
        navigate('/projects')
    }

    return (
        <Container fluid className='dashboard bg-light'>
            <Row className='text-light bg-dark rounded-left'>
                <h2>Dashboard</h2>
            </Row>
            <Row>
                <Container fluid>
                    <h3>Your Projects</h3>
                    <ProjectCarousel projects={projects} viewClick={viewClick}/>
                </Container>
            </Row>
           
            
                <Row className=' mb-3 text-light bg-dark rounded-left'>
                    <h3 >Tasks</h3>
                </Row>
                
                <Row>
                    <Col>
                        <h4>Due Today</h4>
                        <TaskList tasks={dueToday} fetchTasks={fetchTasks}/>
                    </Col>
                    <Col>
                        <h4>Upcoming</h4>
                        <TaskList tasks={upComing} fetchTasks={fetchTasks}/>
                    </Col>
                </Row>
            
            
        </Container>
    )
}