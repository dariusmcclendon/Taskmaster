//imports
import React, { useState, useEffect } from 'react'
import { Card, Container, Button, Carousel, Col, Row } from 'react-bootstrap'

import ProjectCarousel from '../components/ProjectCarousel'
import TaskList from '../components/TaskList'

export default function projectViewer(props){
    // State Variables
    let [currentProject,setCurrentProject] = useState('') // Sets the current project to the project passed to the project viewer.
    let [projects,setProjects] = useState([])
    let [tasks, setTasks] = useState([])
    let [update, setUpdate] = useState(false)

    
    // GET user's projects
    useEffect(()=>{
        let fetchData = async ()=>{
            let response = await fetch('http://localhost:3000/api/projects')
            let data = await response.json()
            //console.log(data)
            setProjects(data)
           
        }
        fetchData()
        
        
    },[update])

    // GET current project's tasks
    useEffect(()=>{
        let fetchTasks = async (currentProject)=>{
            console.log(`Fetching tasks for Project :  ${currentProject.title}`)
            try {
                let response = await fetch(`http://localhost:300/api/projects/${currentProject.project_id}/tasks`,{
                    method : 'GET',
                    headers : {'Content-Type':'application/json'}
                })
                let fetchData = response.json()
                console.log(fetchData)
                setTasks(fetchData)
            } catch (err){
                console.log(err)
            }
        }
    },[currentProject])
    
    // DELETE function to pass to Delete buttons
    let deleteProject = async (project_id)=>{
        try {
            let response = await fetch(`http://localhost:3000/api/projects/${project_id}`,{
                method : 'DELETE',
                headers : {'Content-Type':'application/json'}
                }
                )
            let reply = await response.json()
            console.log(reply)
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <Container>
            <h2>Project Viewer</h2>
            <ProjectCarousel 
                projects={projects} 
                viewClick={setCurrentProject}
                deleteClick={deleteProject}
                currentProject={currentProject}/>
            <Row>
                <TaskList tasks={tasks}/>
            </Row>
        </Container>
    )
}