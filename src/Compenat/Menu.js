import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';




export default function Menu() {
  return (
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: 'gray' }} className='fixed-top'>
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" className="nav-link font-weight-bold">
                            Calculatrice
                        </Nav.Link>
                        <Nav.Link as={Link} to="/Firstpart" className="nav-link font-weight-bold">
                            Todo List
                        </Nav.Link>
                        <Nav.Link as={Link} to="/Slider" className="nav-link font-weight-bold">
                            Slider
                        </Nav.Link>
                        <Nav.Link as={Link} to="/Dataapi" className="nav-link font-weight-bold">
                            Pagination
                        </Nav.Link>
                        <Nav.Link as={Link} to="/LangContext" className="nav-link font-weight-bold">
                            Langue
                        </Nav.Link>
                        <Nav.Link as={Link} to="*" className="nav-link font-weight-bold">
                            Autres
                        </Nav.Link>
                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
  )
}
