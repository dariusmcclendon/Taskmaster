import React from 'react'
import {Nav, Navbar, Button, Container} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function Header(props){
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href='#home'>Taskmaster Non-Auth Branch</Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='me-auto'>
                            <Nav.Link href='#home'>Home</Nav.Link>
                            <Nav.Link href='#projects'>Projects</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    
                </Container>
            </Navbar>
        </div>
    )
}