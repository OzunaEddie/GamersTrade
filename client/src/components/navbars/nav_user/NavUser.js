import React from 'react';
import '../Nav.css'
import './NavUser.css'
import jwt_decode from "jwt-decode";
import Cookies from 'universal-cookie';
import {Image,Navbar, Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import logo from '../../assets/logo.png'


export default class NavUser extends React.Component {


    componentDidMount() {
        const cookies = new Cookies();
        if(cookies.get('token')){
          this.setState({ username: jwt_decode(cookies.get('token')).username});
        }
      }
      
      constructor(props) {
        super(props);
        this.state = {
          username: undefined,
        };
      }
      
      signOut = (e) => {
        e.preventDefault();
        const cookies = new Cookies();
        cookies.remove('token');
        window.location.href='/';
      }

  render(){ 
      
      return (
        <Navbar className="navBackground" expand="lg">
        <Navbar.Brand className="navBrand" href="/">         <img
        src={logo}
        width="120"
        height="50"
        className="d-inline-block align-top"
        alt="GamersTrade Logo"
      /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="container-fluid">
              <div className="ml-auto fluid">
                  <div class="vl"></div>
                  <NavDropdown className="middle-nav ml-auto navItem" title="SWITCH" id="basic-nav-dropdown dropdown-menu-align-right">
                    <NavDropdown.Item href="#action/3.1">Action-Adventure</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">First-Person Shooter</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Role-Playing</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Sports</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.5">All Available Games</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown className="middle-nav ml-auto navItem" title="XBOX 360" id="basic-nav-dropdown dropdown-menu-align-right">
                    <NavDropdown.Item href="#action/3.1">Action-Adventure</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">First-Person Shooter</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Role-Playing</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Sports</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.5">All Available Games</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown className="middle-nav ml-auto navItem" title="XBOX ONE" id="basic-nav-dropdown dropdown-menu-align-right">
                    <NavDropdown.Item href="#action/3.1">Action-Adventure</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">First-Person Shooter</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Role-Playing</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Sports</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.5">All Available Games</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown className="middle-nav ml-auto navItem" title="PS3" id="basic-nav-dropdown dropdown-menu-align-right">
                    <NavDropdown.Item href="#action/3.1">Action-Adventure</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">First-Person Shooter</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Role-Playing</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Sports</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.5">All Available Games</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown className="middle-nav ml-auto navItem" title="PS4" id="basic-nav-dropdown dropdown-menu-align-right">
                    <NavDropdown.Item href="#action/3.1">Action-Adventure</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">First-Person Shooter</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Role-Playing</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Sports</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.5">All Available Games</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown className="middle-nav ml-auto navItem" title="PS5" id="basic-nav-dropdown dropdown-menu-align-right">
                    <NavDropdown.Item href="#action/3.1">Action-Adventure</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">First-Person Shooter</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Role-Playing</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Sports</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.5">All Available Games</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown className="middle-nav ml-auto navItem" title="PC" id="basic-nav-dropdown dropdown-menu-align-right">
                    <NavDropdown.Item href="#action/3.1">Action-Adventure</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">First-Person Shooter</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Role-Playing</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Sports</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.5">All Available Games</NavDropdown.Item>
                </NavDropdown>
              </div>
              <div className="ml-auto fluid">
              <NavDropdown className="ml-auto navItem" title={"Hi, " + this.state.username} id="basic-nav-dropdown dropdown-menu-align-right" alignRight>
                <NavDropdown.Item href="/MyListing">My Listing</NavDropdown.Item>
                <NavDropdown.Item href="./TransactionHistory">Transaction History</NavDropdown.Item>
                <NavDropdown.Item href="/Profile">Account</NavDropdown.Item>
                <NavDropdown.Item href="/Help">Help</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="navSignOut" onClick={this.signOut}>{"Not " + this.state.username + "? Sign out"}</NavDropdown.Item>
            </NavDropdown>
              </div>
            </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}