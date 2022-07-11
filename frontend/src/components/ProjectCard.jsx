import React from 'react'
import {Card, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

// Should be passed a project as a property, and return a single project card.
export default function ProjectCard(props){
        return (
            <Card style={{width: '18rem'}} key={props.project.project_id}>
                <Card.Body>
                    <Card.Title>{props.project.title}</Card.Title>
                    <Card.Text>{props.project.desc}</Card.Text>
                </Card.Body>
                <Button 
                    variant='primary'
                    onClick={()=>{props.viewClick(props.project)}}
                    >View</Button>
                <Button variant='danger' 
                    onClick={()=>{props.DeleteClick(props.project.project_id)}}>
                    Delete
                    </Button>
            
            
            </Card>
        )
    }