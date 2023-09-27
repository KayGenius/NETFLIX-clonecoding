import React from "react";
import { Nav, Navbar, Container, Form, Button, } from "react-bootstrap";
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <Navbar bg="dark" expand="lg" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            width="100px"
          ></img>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >

              
            <Link className='Link-item' to="/">Home</Link>
            <Link className='Link-item' to="/">Movies</Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              data-bs-theme="light"
            />
            <Button variant="outline-danger">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
