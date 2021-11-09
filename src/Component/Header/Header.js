import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';



const Header = () => {
    return (

      <div>
            <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand href="#home"><span className="">Clothing</span> Bazar</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Shop</Nav.Link>
          <Nav.Link href="#pricing">Blog</Nav.Link>
          <Nav.Link href="#features">About Us</Nav.Link>
          <Nav.Link href="#features">Contact Us</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      </div>

      

    );
};

export default Header;