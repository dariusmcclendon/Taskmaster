//imports
import React , {useContext} from 'react'
import {Card, Button, Row, Form, CloseButton} from 'react-bootstrap'
import {CurrentUser} from '../contexts/currentUser'

// Module used to create new projects
export default function NewProjectModule(props){
    // context usage
    
    return (
        <Card style={{width:'85%'}}>
            <Card.Title>New Project <CloseButton onClick={()=>{props.hide(false)}}/></Card.Title>
            <Card.Body>
                <Form onSubmit={props.createProject}>
                    <Form.Group controlId="projectName">
                        <Form.Control 
                            placeholder="Name your project"
                            value={props.newProjectName}
                            onChange={e=>{props.setNewProjectName(e.target.value)}}/>
                    </Form.Group>
                    <Button variant='primary' type='submit'>Create</Button>
                </Form>
            </Card.Body>
        </Card>       
    )
}