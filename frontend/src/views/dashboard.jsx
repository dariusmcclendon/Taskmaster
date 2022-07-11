// Dashboard for viewing projects and tasks at a glance. Should populate projects and tasks via fetch request

//imports
import React, { useState, useEffect } from 'react'
import { Card, Container, Button } from 'react-bootstrap'
import ProjectCard from '../components/ProjectCard'
import ProjectCarousel from '../components/ProjectCarousel'

export default function Dashboard(props){
    // state variables
    let [projects, setProjects] = useState([])
    let [update, setUpdate] = useState(false)

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
           <ProjectCarousel projects={projects}/>
        </Container>
    )
}