import React, {useState, useEffect} from 'react'
import {Card,Placeholder,ListGroup, Button, Container} from 'react-bootstrap'

export default function GroupModule(props){
    let [group,setGroup] = useState([{username:'Todd'},{username:'Mark'}])
    let list = null
    if(group !== null){
         list = group.map((user)=>{
            return (
                <ListGroup.Item><Container>{user.username} <Button variant="danger">Remove</Button></Container></ListGroup.Item>
            )
        })
    }
    if(props.project !== null && props.project !== undefined ){
        
        return (
           <Card>
                <Card.Title>{props.project.title} Group</Card.Title>
                <ListGroup variant="flush">
                    {list}
                </ListGroup>
           </Card> 
        )
    }
}