//imports
import React, {useContext, useState,useEffect} from 'react'
import {Form, Card, CloseButton, Button, Row, Col, Container} from 'react-bootstrap'
import Calendar from 'react-calendar'
import {CurrentUser} from '../contexts/currentUser'

export default function NewTaskModule(props){
    // state variables
    let {currentUser} = useContext(CurrentUser)
    let [newTaskName, setNewTaskName] = useState('')
    let [taskFrequency, setTaskFrequency] = useState('')
    let [taskDate, setTaskDate] = useState(new Date())

    let createTask = async(e)=>{
        e.preventDefault()
        try {
            let settings = {
                    title: newTaskName,
                    project_id: props.currentProject.project_id,
                    frequency : taskFrequency,
                    dueDate : taskDate,
                    assigned: currentUser.user_id,
                    creator: currentUser.user_id,
                    createdAt: new Date(),
                    updatedAt: new Date()

            }
            let response = await fetch(`http://localhost:3000/api/tasks`,{
                method:'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(settings)
            })
            let reply = await response.json()
            props.fetchTasks(props.currentProject)
        } catch(err){
            console.log(err)
        }
    }

    return (
        <Container>
            <Row>
                New Task  <CloseButton onClick={()=>{props.show(false)}}/>
            </Row>
            <Row>
            <Form onSubmit={createTask}>
                    <Form.Group controlId="taskName">
                        <Form.Control
                            placeholder="Task Name"
                            value={newTaskName}
                            onChange={e=>{setNewTaskName(e.target.value)}}
                        >
                        </Form.Control>
                       
                    </Form.Group>
                    <Form.Select 
                        onChange={e=>{setTaskFrequency(e.target.value)}}
                        value={taskFrequency}>
                            <option>Frequency</option>
                            <option value='once'>Once</option>
                            <option value='daily'>Daily</option>
                            <option value='weekly'>Weekly</option>
                            <option value='monthly'>Monthly</option>
                    </Form.Select>
                    <Calendar onChange={setTaskDate} value={taskDate}/>
                    <Button type="submit">
                       Create Task
                    </Button>
                </Form>
            </Row>
       </Container>
    )
}