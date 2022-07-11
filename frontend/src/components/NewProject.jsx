//imports
import React from 'react'
import {Card, Button, Row, Form, CloseButton} from 'react-bootstrap'

export default function NewProjectModule(props){
    return (
        <Card>
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