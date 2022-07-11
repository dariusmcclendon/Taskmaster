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
    let navigate = useNavigate()


    //Login validation function
    let validate = async(e)=>{
        e.preventDefault()
        // try block for  password authentication
        try {
           
            if(inputUsername !== "" && inputPassword !== ""){
                let response = await fetch(`http://localhost:3000/api/users/login/${inputUsername}`,{
                    method: "GET",
                    header: {"Content-Type":"application/json"}
                })
                let pHash = await response.json()
                let result = await bcrypt.compareSync(inputPassword, pHash)
                console.log(result)
                if(result == true) {
                let response = await fetch(`http://localhost:300/api/users/${inputUsername}`,{
                    method: "GET",
                    header: {"Content-Type":"application/json"}
                })
                navigate('/dashboard')
                console.log("Login successful")
                } else {
                    setErrMessage("Incorrect Password.")
                    console.log("Login failed.")
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