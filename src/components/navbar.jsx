import React from 'react';
import{Link} from 'react-router-dom';
import './navbar.css';
import {
  Nav, NavDropdown, Navbar, Container,FormControl, Form, Button
} from 'react-bootstrap';

export default function Mynavbar() {
  return (
    <Navbar className="color-nav" variant="light">
        <Container>
            <Navbar.Brand as={Link} to='/'>PLAAAANTS</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} to='about'>About</Nav.Link>
                <Nav.Link as={Link} to='social'>Social Media</Nav.Link>
                <Nav.Link as={Link} to='plants'>Plant Database</Nav.Link>
               
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}