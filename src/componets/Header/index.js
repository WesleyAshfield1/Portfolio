import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


const TopOfPage = () => {
    return(
        <Navbar bg='secondary' expand='lg'>
            <Navbar.Brand>Wesley Ashfield</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/Aboutme">About Me</Nav.Link>
                        <Nav.Link href="/Contact">Contact</Nav.Link>
                        <Nav.Link href="/Projects">Projects</Nav.Link>
                        <Nav.Link href="/Resume">Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    )
}

export default TopOfPage;