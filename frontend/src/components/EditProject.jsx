
import React, {useState, useEffect} from 'react'
import {Card, Button, ButtonGroup, Col, Form, CloseButton} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

//module used to create projects and manage current project,including editing, deleting, adding groups, adding tasks
export default function EditProjectModule(props){
    let [inTitle, setTitle] = useState(props.project.title)
    let [inDesc, setDesc] = useState(props.project.desc)


    let updateProject = async (e)=>{
        e.preventDefault()
        try {
            let response = await fetch(`http://localhost:3000/api/projects/${props.project.project_id}`,{
                method: 'PUT',
                headers : {'Content-Type':'application/json'},
                body : JSON.stringify( {
                    title : inTitle,
                    desc : inDesc
                })
            })
            let reply = await response.json()
            props.setCurrentProject(reply)
            
        } catch (err) {

        }
    }
   return (
    <Card style={{width:'85%'}}>
            <Card.Title>New Project <CloseButton onClick={()=>{props.show(false)}}/></Card.Title>
            <Card.Body>
                <Form onSubmit={updateProject}>
                    <Form.Group controlId="projectName">
                        <Form.Label>Project Name</Form.Label>
                        <Form.Control 
                            value={inTitle}
                            onChange={e=>{setTitle(e.target.value)}}/>
                    </Form.Group>
                    <Form.Group controlId="projectTitle">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            value={inDesc}
                            onChange={e=>{setDesc(e.target.value)}}
                            />
                    </Form.Group>
                    <Button variant='warning' type='submit'>Update</Button>
                </Form>
            </Card.Body>
        </Card>       
   )
}