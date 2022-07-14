//imports
import React, { useState, useEffect, useContext } from 'react'
import { Card, Container, Button, Carousel, Col, Row, Badge } from 'react-bootstrap'
import { CurrentUser } from '../contexts/currentUser'
import ProjectCarousel from '../components/ProjectCarousel'
import TaskList from '../components/TaskList'
import EditProjectModule from '../components/EditProject'
import NewProject from '../components/NewProject'
import NewTask from '../components/NewTask'
import GroupModule from '../components/GroupModule'


export default function ProjectViewer(props) {
    let { currentUser } = useContext(CurrentUser)
    // State Variables
    let [currentProject, setCurrentProject] = useState(null) // Sets the current project to the project passed to the project viewer.
    let [projects, setProjects] = useState([]) // Sets the projects
    let [tasks, setTasks] = useState([]) // Sets the tasks
    let [update, setUpdate] = useState(false) // used to force updates
    let [showUpdateProject, setShowUpdateProject] = useState(false)
    let [showNewProject, setShowNewProject] = useState(false) // used to show new project module
    let [newProjectName, setNewProjectName] = useState('') // Pass to NewProject component
    let [showNewTask, setShowNewTask] = useState(false)
    
    // initial fetch of user's projects.
    useEffect(() => {
        let fetchData = async () => {
            if (currentUser) {
                console.log('fetching projects for ', currentUser.display_name)
                let response = await fetch(`http://localhost:3000/api/users/${currentUser.user_id}/projects`, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' }
                })
                let data = await response.json()
                setProjects(data)
                if (currentProject) {
                    fetchTasks(currentProject)
                } else {
                    fetchTasks(data[0])
                    setCurrentProject(data[0])
                }

            } else {
                console.log('waiting for currentUser')
            }

        }
        fetchData()


    }, [currentUser, update])

    // GET a project's tasks
    let fetchTasks = async (project) => {

        console.log(`Fetching tasks for Project :  ${project.title}`)
        try {
            let response = await fetch(`http://localhost:3000/api/projects/${project.project_id}/tasks`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            })
            let fetchData = await response.json()
            console.log(fetchData)
            setTasks(fetchData)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        if (currentProject) {
            fetchTasks(currentProject)
        }
    }, [currentProject])

    // CREATE function to pass to NewProjectModule
    let createProject = async (e) => {
        e.preventDefault()
        console.log('create project button clicked')
        if (newProjectName !== '') {
            try {
                let response = await fetch(`http://localhost:3000/api/projects`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        title: newProjectName,
                        owner_id: currentUser.user_id,
                        createdAt: new Date(),
                        updatedAt: new Date()

                    })
                }) //end fetch
                let newProject = response.json()
                console.log('new project created : ', newProject)
                setCurrentProject(newProject)
                setUpdate(!update)
                setShowNewProject(false)
            } catch (err) {
                console.log(err)
            }
        }
    }

    // DELETE function to pass to DeleteProject buttons
    let deleteProject = async () => {

        try {
            let response = await fetch(`http://localhost:3000/api/projects/${currentProject.project_id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }
            }
            )
            let reply = await response.json()
            console.log(reply)
            setUpdate(!update)
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

                    currentProject={currentProject} />
            </Row>
            <Row>
                <Col>
                <h3>{currentProject? currentProject.title : null}</h3>
                <p>{currentProject ? currentProject.desc : null}</p>
                </Col>
                
                <Col>
                <Button variant='success' className='mx-2'
                        onClick={() => { setShowNewProject(true) ; setShowUpdateProject(false)}}>
                        New Project
                    </Button>
                    <Button variant='warning' className='mx-2'
                        onClick={()=>{setShowUpdateProject(true) ; setShowNewProject(false)}}>
                        Edit
                    </Button>
                    <Button variant='danger' className='mx-2'
                        onClick={()=>{deleteProject()}}>
                        Delete
                    </Button>
                </Col>
                    
                
            </Row>
            <Row>
                        {showNewProject ? <Col>
                            <NewProject
                                newProjectName={newProjectName}
                                setNewProjectName={setNewProjectName}
                                hide={setShowNewProject}
                            /> 
                        </Col>: null}

                        {showUpdateProject ? <Col>
                            <EditProjectModule
                            show={setShowUpdateProject}
                            project={currentProject}
                            setCurrentProject={setCurrentProject}
                            />
                        </Col>: null}
                    <Col>
                        <GroupModule
                        project={currentProject}
                        />
                    </Col>
            </Row>
            <Row>
                <Container>
                <Row>
                        <h3>Tasks
                            <Button variants='success' className='mx-2'
                                onClick={() => { setShowNewTask(true) }}>
                                New Task
                            </Button>
                        </h3>
                    </Row>
                    <Row>
                        {showNewTask ? <NewTask
                            show={setShowNewTask} fetchTasks={fetchTasks} currentProject={currentProject}
                        /> : null}

                        <TaskList tasks={tasks} fetchTasks={fetchTasks} currentProject={currentProject} />
                    </Row>
                </Container>


            </Row>
        </Container>
    )
}