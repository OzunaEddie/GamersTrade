import React from 'react';
import '../Nav.css'
import './NavLogin.css'
import logo from '../../assets/logo.png'
import {Navbar} from 'react-bootstrap';



export default class NavLogin extends React.Component {

  render(){ 
      
      return (
        <Navbar className="navBackground" expand="lg">
            <Navbar.Brand className="navBrand" href="/">    
            <img
        src={logo}
        width="120"
        height="50"
        className="d-inline-block align-top"
        alt="GamersTrade Logo"
      />
      </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Navbar>
    );
  }
}