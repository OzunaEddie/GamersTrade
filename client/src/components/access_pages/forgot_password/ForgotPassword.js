import React from 'react';
import './ForgotPassword.css'
import api from "../../API/api";
import {Col, Row} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Card} from "react-bootstrap";

export default class Register extends React.Component {
  constructor() {
    super();
    this.state = {
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
    const { email} = this.state;
    var newState = Object.assign({}, this.state);
    newState.errors = [];
    if (email === "") {
      newState.errors.push("Please Enter Your Email");
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
       <Card className="card">
         <Card.Header as="h5">Reset Password</Card.Header>
          <Form className="ResetForm" onSubmit={this.handleSubmit}>
          <ul data-testid="errors">
            { this.state.errors.length > 0 &&
              this.state.errors.map((error,index) => {
                return <li key={index} className="text-warning"> {error} </li>
            })
            }
          </ul>
            <Form.Group controlId="formEmail">
              <Form.Label className="text-dark">Forgot your password? Please enter the email address linked to your account.
              You will receive an email with a link to reset your password.</Form.Label>
              <Form.Control data-testid="email" type="email" placeholder="Enter Your Email Address"
                onChange={this.handleChange("email")}/>
            </Form.Group>
            <Button data-testid="Reset" variant="success" type="submit" size="md"  className="btn-success" block
              onClick={this.handleSubmit}>
              RESET PASSWORD
            </Button>
          </Form>
       </Card>
    );
  }
}