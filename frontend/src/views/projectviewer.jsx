//imports
import React, { useState, useEffect, useContext } from 'react'
import { Card, Container, Button, Carousel, Col, Row, Badge } from 'react-bootstrap'
import {CurrentUser} from '../contexts/currentUser'
import ProjectCarousel from '../components/ProjectCarousel'
import TaskList from '../components/TaskList'
import ProjectModule from '../components/ProjectModule'
import NewProject from '../components/NewProject'
import NewTask from '../components/NewTask'
import GroupModule from '../components/GroupModule'


export default function projectViewer(props){
    let {currentUser} = useContext(CurrentUser)
    // State Variables
    let [currentProject,setCurrentProject] = useState(null) // Sets the current project to the project passed to the project viewer.
    let [projects,setProjects] = useState([]) // Sets the projects
    let [tasks, setTasks] = useState([]) // Sets the tasks
    let [update, setUpdate] = useState(false) // used to force updates
    let [showNewProject, setShowNewProject] = useState(false) // used to show new project module
    let [newProjectName, setNewProjectName] = useState('') // Pass to NewProject component
    let [newTaskName, setNewTaskName] = useState('') // Pass to New Task component
    let [taskFrequency, setTaskFrequency] = useState('')
    let [showNewTask, setShowNewTask] = useState(false)
    console.log(currentUser)
    // GET user's projects
    useEffect(()=>{
        let fetchData = async ()=>{
            let response = await fetch('http://localhost:3000/api/projects')
            let data = await response.json()
            setProjects(data)
            fetchTasks(data[0])
            setCurrentProject(data[0])
            
        }
       fetchData()
        
        
    },[update])

    // GET a project's tasks
    let fetchTasks = async (project)=>{
        console.log(`Fetching tasks for Project :  ${project.title}`)
        try {
            let response = await fetch(`http://localhost:3000/api/projects/${project.project_id}/tasks`,{
                method : 'GET',
                headers : {'Content-Type':'application/json'}
            })
            let fetchData = await response.json()
            setTasks(fetchData)
        } catch (err){
            console.log(err)
        }
    }
    useEffect(()=>{
       if(currentProject !== null){
        fetchTasks(currentProject)
       }
    },[currentProject])
    
    // CREATE function to pass to NewProjectModule
    let createProject = async (e)=>{
        e.preventDefault()
        console.log('create project button clicked')
        if(newProjectName !== ''){
            try {
                let response = await fetch(`http://localhost:3000/api/projects`,{
                    method: 'POST',
                    headers: {'Content-Type':'application/json'},
                    body: JSON.stringify({
                        title: newProjectName,
                        owner_id: 1,
                        createdAt: new Date(),
                        updatedAt: new Date()
    
                    })
                }) //end fetch
                let newProject = response.json()
                console.log('new project created : ' , newProject)
                setCurrentProject(newProject)
                setUpdate(!update)
                setShowNewProject(false)
            } catch(err) {
                console.log(err)
            }
        }
        }
        
    // DELETE function to pass to DeleteProject buttons
    let deleteProject = async ()=>{

        try {
            let response = await fetch(`http://localhost:3000/api/projects/${currentProject.project_id}`,{
                method : 'DELETE',
                headers : {'Content-Type':'application/json'}
                }
                )
            let reply = await response.json()
            console.log(reply)
            setUpdate(!update)
        } catch(err) {
            console.log(err)
        }
    }
    // CREATE function to pass to NewTaskModule
    let createTask = async()=>{
        try {
            let response = await fetch(`http://localhost:3000/api/tasks`,{
                method:'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify({
                    title: newTaskName,
                    project_id: currentProject.project_id,
                    assigned: 1,
                    creator: 1,
                    createdAt: new Date(),
                    updatedAt: new Date()
                })
            })
            let reply = await response.json()
            console.log(reply)
            fetchTasks(currentProject)
        } catch(err){
            console.log(err)
        }
    }
    // DELETE function to pass to TaskList
    let deleteTask = async(id)=>{
        try {
            let response = await fetch(`http://localhost:3000/api/tasks/${id}`,{
                method: 'DELETE',
                headers: {'Content-Type':'application/json'}
            })
            let reply = await response.json()
            console.log(reply)
            fetchTasks(currentProject)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Container>
            
            <h2>Projects</h2> 
            <Row>
            <ProjectCarousel 
                projects={projects} 
                viewClick={setCurrentProject}
                
                currentProject={currentProject}/>
            </Row>
        
            <Row >
                    <Col id="task-col" lg={8} className="border-end border-dark h-100 px-2">
                            <Row>
                            <h3>Tasks 
                                <Button variants='success' className='mx-2'
                                    onClick={()=>{setShowNewTask(true)}}>
                                    New Task
                                </Button>
                            </h3>
                            </Row>
                            
                                {showNewTask ? <NewTask
                                    newTaskName={newTaskName}
                                    setNewTaskName={setNewTaskName}
                                    show={setShowNewTask}
                                    createTask={createTask}
                                    taskFrequency={taskFrequency}
                                    setTaskFrequency={setTaskFrequency}
                                /> : null}
                            
                            <TaskList tasks={tasks} delete={deleteTask}/>
                    </Col>
                    
                    <Col id="project-col" className="h-100 px-2">
                            <Row>
                                    <h3>Manage  
                                        <Button variant='success' className='mx-2'
                                            onClick={()=>{setShowNewProject(true)}}>
                                            New Project
                                        </Button>
                                    </h3> 
                                </Row>
                                <Row>
                                { showNewProject ? <NewProject
                                    newProjectName={newProjectName}
                                    setNewProjectName={setNewProjectName}
                                    createProject={createProject}
                                    hide={setShowNewProject}
                                /> : null}
                                </Row>
                                <Row>
                                    
                                    <ProjectModule 
                                        project={currentProject}
                                        deleteClick={deleteProject}
                                    />
                                </Row>
                                <Row>
                                <GroupModule
                                    project={currentProject}
                                    />
                                </Row>
                    </Col>
                    
               
            </Row>
        </Container>
    )
}