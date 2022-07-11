import React, { useState, useEffect } from 'react'
import { Card, Container, Button, Carousel, Col, Row } from 'react-bootstrap'
import ProjectCard from '../components/ProjectCard'

export default function ProjectCarousel(props){
    let projectCards = props.projects.map((project)=>{
        return (
            <ProjectCard project={project} viewClick={props.viewClick} deleteClick={props.deleteClick} key={project.project_id}/>
        )
        })
    return (
        <Container fluid className='d-flex flex-row flex-nowrap'>
            {projectCards}
        </Container>
    )
}