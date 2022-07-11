import React, { useState, useEffect } from 'react'
import { ListGroup, Button, Accordion, Row, Col } from 'react-bootstrap'

export default function TaskList(props){
    let listItems = props.tasks.map((task)=>{
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
                        <Button>
                            Delete
                        </Button>
                        </Col>
                    </Row>
                    

                </Accordion.Body>
            </Accordion.Item>
        )
    })
    return (
        <Col>
        <h3>Tasks</h3>
        <Accordion defaultActiveKey='0'>
            {listItems}
        </Accordion>
        </Col>
    )
}