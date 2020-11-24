import React from 'react';
import {
  Link
} from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import api from '../../API/api'
import './UserLogin.css';


export default class UserLogin extends React.Component {


  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      errors: [],
    };
  }

  // Handle field change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    var newState = Object.assign({}, this.state);
    newState.errors = [];
    if (username === "") {
      newState.errors.push("Please Enter an Username");
    }
    if (password === "") {
      newState.errors.push("Please Enter a Password");
    }
    if(newState.errors.length === 0) {
      // Insert Backend Here.
      const data = this.state
      const API = new api();
      API.logIn(data).then( error => {
        this.setState(({errors}) => ({
          errors: errors.concat(error)
        }));
      });
    }
    this.setState(newState);
  };

  render() {
    return (
      <Container className="container-bg login-container rounded px-5 py-4 mx-4">
        <Row>
          <div className="leftLine"></div>
          
          
          <Col>
          <Form className="loginForm" onSubmit={this.handleSubmit}>
          <h2 className="text-dark text-center">Login to Gamers<span className="trade">Trade</span></h2>
          <ul data-testid="errors">
            { this.state.errors.length > 0 &&
              this.state.errors.map((error,index) => {
                return <li key={index} className="text-warning"> {error} </li>
            })
            }
          </ul>
            <Form.Group controlId="formUsername">
              <Form.Label className="text-dark">Username:</Form.Label>
              <Form.Control data-testid="username" type="text" placeholder="Enter Username"
                onChange={this.handleChange("username")}/>
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label className="text-dark">Password:</Form.Label>
              <Form.Control data-testid="password" type="password" placeholder="Enter Password"
                onChange={this.handleChange("password")}/>
            </Form.Group>
            <Button data-testid="Login" variant="success" type="submit" size="lg" block
              onClick={this.handleSubmit}>
              LOGIN
            </Button>
            <br/>
          <Link to="ForgotPassword" className="text-success">Forgot Your Password?</Link>
          </Form>
          </Col>
          <div className="rightLine"></div>
          <Col className="rightForm">
          <h2 className="text-dark text-center">Not a member yet?</h2> 
          <Link to="Register" className="btn-signup text-success"><Button data-testid="Login" variant="success" type="submit" size="lg" block>
              SIGN UP
            </Button></Link> 
          </Col>
          </Row>
      </Container>
    );
  }
}