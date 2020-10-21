
import React from 'react';
import {Navbar,Nav,Button} from 'react-bootstrap';
import './Header.css';
import logo from '../../logos/Group 1329.png';

const Header = () => {
    return (
        <div>
            <Navbar>
    <Navbar.Brand href="#home">
      <img className="image" src={logo} alt=""/>
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link className="nav"  href="/home">Home</Nav.Link>
      <Nav.Link className="nav"  href="/donation">Donation</Nav.Link>
      <Nav.Link className="nav"  href="/event">Event</Nav.Link>
      <Nav.Link className="nav"  href="/blog">Blog</Nav.Link>
      <Button style={{marginRight:"20px"}}  href="/register"> Register</Button>
      <Button variant="dark"  href="/admin">Admin</Button>
    </Nav>
    
  </Navbar>
        </div>
    );
};

export default Header;