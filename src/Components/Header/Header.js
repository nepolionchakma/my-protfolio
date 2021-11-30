import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import "./Header.css"

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="custom-color my-border" variant="dark" sticky="top" >
            <Container>
                <Navbar.Brand href="#">Dev@Nepolion</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
                    <Nav className="ms-auto">
                        <Nav.Link as={HashLink} to="/home" className="nav-link active" aria-current="page" >Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#projects" className="nav-link">Projects</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#about" className="nav-link">About Me</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#blogs" className="nav-link">Blogs</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#contact" className="nav-link">Contact</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;