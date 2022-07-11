//imports
import React from 'react'
import {Form, Card, CloseButton, Button} from 'react-bootstrap'

export default function NewTaskModule(props){
    return (
       <Card style={{width:'85%'}}>
            <Card.Title>New Task <CloseButton onClick={()=>{props.show(false)}}/></Card.Title>
            <Card.Body>
                <Form onSubmit={props.createTask}>
                    <Form.Group controlId="taskName">
                        <Form.Control
                            placeholder="Task Name"
                            value={props.newTaskName}
                            onChange={e=>{props.setNewTaskName(e.target.value)}}
                        >
                        </Form.Control>
                       
                    </Form.Group>
                    <Form.Select>
                            <option 
                                value={props.taskFrequency}
                                onChange={e=>{props.setTaskFrequency(e.target.value)}}>Frequency</option>
                            <option value='once'>Once</option>
                            <option value='daily'>Daily</option>
                            <option value='weekly'>Weekly</option>
                            <option value='monthly'>Monthly</option>
                    </Form.Select>
                    <Button type="submit">
                        Add
                    </Button>
                </Form>
            </Card.Body>
            
       </Card>
    )
}