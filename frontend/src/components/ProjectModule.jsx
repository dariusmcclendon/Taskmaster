import React, {useState, useEffect} from 'react'
import {Card, Button, ButtonGroup, Col, Placeholder} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

//module used to create projects and manage current project,including editing, deleting, adding groups, adding tasks
export default function ProjectModule(props){
    function loadingCard(){
        return (
            <Col>
        
            <Card>
                
                <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={6}/>
                </Placeholder>
                <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={7}/> <Placeholder xs={7}/>
                    <Placeholder xs={7}/> <Placeholder xs={7}/>
                </Placeholder>
                <Placeholder.Button variant="primary" xs={6}/>
            </Card>
            </Col>
        )
    }
    if(props.project){

        return (

            <Col>
            
                <Card>
                    <Card.Body>
                        <Card.Title>{props.project.title}</Card.Title>
                        <Card.Text>
                            {props.project.desc}
                        </Card.Text>
                        <ButtonGroup>
                            <Button variant="warning">Edit</Button>
                            <Button variant="danger" onClick={()=>{props.deleteClick()}}>Delete</Button>
                        </ButtonGroup>
                    </Card.Body>
                </Card>
            </Col>
        )
    } else return (
        loadingCard()
    )
    
}