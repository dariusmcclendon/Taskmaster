import React, { useState, useEffect } from 'react'
import { Button, Accordion, Row, Col, Placeholder} from 'react-bootstrap'

export default function TaskList(props){
    let listItems = ''
    function loadingList(){
        return (
            <Col>
            <h3>Loading...</h3>
            <Placeholder as={Accordion.Item} animation="glow">
                <Placeholder xs={8}/>
            </Placeholder>
            <Placeholder as={Accordion.Item} animation="glow">
                <Placeholder xs={8}/>
            </Placeholder>
            <Placeholder as={Accordion.Item} animation="glow">
                <Placeholder xs={8}/>
            </Placeholder>
            </Col>
        )
    }
    if(props.tasks.length !== 0){
        listItems = props.tasks.map((task)=>{
            return (
                <Accordion.Item eventKey={task.task_id}>
                    <Accordion.Header>{task.title}</Accordion.Header>
                    <Accordion.Body>
                        <Row>
                            {task.desc}
                        </Row>
                        <Row>
                            <Col>
                            <Button>
                                Accept
                            </Button>
                            <Button>
                                Complete
                            </Button>
                            <Button onClick={()=>{props.delete(task.task_id)}}>
                                Delete
                            </Button>
                            </Col>
                        </Row>
                        
    
                    </Accordion.Body>
                </Accordion.Item>
            )
        })
    } else if(props.tasks.length == 0){
        return (
            <h4>No tasks.</h4>
        )
    } else {
        listItems = loadingList()
    }
    
    return (
        <Accordion defaultActiveKey='0'>
            {listItems}
        </Accordion>
    )
}