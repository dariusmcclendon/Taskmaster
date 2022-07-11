//imports
import  React, { useState } from 'react'
import { Container, Form, Button} from 'react-bootstrap'
import { Navigate, useNavigate } from 'react-router-dom'
import bcrypt from 'bcryptjs'

//login page
export default function Signup(props){
    //State Variables
    let [inputUsername, setUsername] = useState('')
    let [inputPassword, setPassword] = useState('')
    let [passwordConfirm, setPasswordConfirm] = useState('')
    let [badAttempt, setBadAttempt] = useState(false)
    let [errMessage, setErrMessage] = useState('')
    let navigate = useNavigate()
    let validate = async(e)=>{
        e.preventDefault()
        console.log(inputUsername,inputPassword)
        if(inputUsername !== "" && inputPassword !== ""){
            let encryptedPass = await bcrypt.hash(inputPassword, 10)
            let response = await fetch('http://localhost:3000/api/users/',
            {
                method : 'POST',
                headers:{'Content-Type' : 'application/json'},
                body : JSON.stringify({
                    username : inputUsername,
                    password : encryptedPass,
                    display_name : inputUsername,
                    createdAt : new Date(),
                    updatedAt : new Date()
                })
            })
            let resData = await response.json()
            navigate('/dashboard')
        } else {
            setErrMessage('No username or password.')
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
                <Form.Group controlId="passwordConfirm">
                    <Form.Label>Retype Password</Form.Label>
                    <Form.Control type="password" placeholder="re-enter password" value={passwordConfirm} onChange={e=>{setPasswordConfirm(e.target.value)}}/>
                </Form.Group>
                <Button variant='primary' type='submit'>
                    Sign Up
                </Button>
            </Form>
        </Container>
    )
}