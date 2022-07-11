// Dashboard for viewing projects and tasks. Should populate projects and tasks via fetch request

//imports
import { React, useState, useEffect } from 'react'
import { Card, Container, Button } from 'react-bootstrap'

export default function Dashboard(props){
    // state variables
    let [projects, setProjects] = useState([])
    let [update, setUpdate] = useState(false)
    // project Card storage variable.
    // Creates a card for every project. 
    let ProjectCards = projects.map((project)=>{
        return (
            <Card style={{width: '18rem'}} key={project.project_id}>
                <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.desc}</Card.Text>
                </Card.Body>
                <Button variant='primary'>View</Button>
                <Button variant='danger' onClick={()=>deleteProject(project.project_id)}>Delete</Button>
            
            
            </Card>
        )
    })
    // function for delete button
    let deleteProject = async (id) =>{
        await fetch(`http://localhost:3000/api/projects/${id}`,{
            method : 'DELETE',
            headers:{"Content-Type":'application/json'}
        })
    }
    // runs fetch request for user's projects
    useEffect(()=>{
        let fetchData = async ()=>{
            let response = await fetch('http://localhost:3000/api/projects')
            let data = await response.json()
            setProjects(data)
        }
        fetchData()
    },[update])
    return (
        <Container>
            <h2>Dashboard</h2>
            <h3>Your Projects</h3>
            {ProjectCards}
        </Container>
    )
}