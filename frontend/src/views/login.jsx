//imports
import  React, { useState} from 'react'
import { Container, Form, Button} from 'react-bootstrap'
import { Navigate, useNavigate } from 'react-router-dom'
import bcrypt from 'bcryptjs'

//login page
export default function Login(props){
    //State Variables
    let [inputUsername, setUsername] = useState('')
    let [inputPassword, setPassword] = useState('')
    let [badAttempt, setBadAttempt] = useState(false)
    let [errMessage, setErrMessage] = useState('')

    let validate = async(e)=>{
        e.preventDefault()
        try {
            let pHash = await fetch(`http://localhost:3000/api/users/login/${inputUsername}`,{
                method: "GET",
                header: {"Content-Type":"application/json"}
            })
            if(inputUsername !== "" && inputPassword !== ""){
                
                let result = bcrypt.compare(pHash,inputPassword)
                if(result == true) {
                
                } else {
                    setErrMessage("Incorrect Password.")
                }
                
            }
        } catch (err) {
            console.log(err)
        }
        
    }
    return (
        <Container>
            <Form onSubmit={validate}>
                <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control placeholder="Enter Username" value={inputUsername} onChange={e=>{setUsername(e.target.value)}}/>
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="enter a password" value={inputPassword} onChange={e=>{setPassword(e.target.value)}}/>
                </Form.Group>
                <Button variant='primary' type='submit'>
                    Log In
                </Button>
            </Form>
        </Container>
    )
}