import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Register.css'

export default class Register extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      email2: "",
      password: "",
      password2: "",
      errors: [],
    };
  }

  // Handle field change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  // eventually api call to call the backend
  handleSubmit = (e) => {
    e.preventDefault();
    const {firstName, lastName, username, email,email2, password, password2 } = this.state;
    var newState = Object.assign({}, this.state);
    newState.errors = [];
    if(firstName === "" || lastName === "") {
      newState.errors.push("Please input your full name")
    }
    if (username === "") {
      newState.errors.push("Please enter a username");
    }
    if (email === "") {
      newState.errors.push("Please enter an email");
    }
    if (password === "" || password2 === "") {
      newState.errors.push("Please enter a password or check password fields");
    }
    if (password !== password2) {
      newState.errors.push("Your password and confirmation password do not match");
    }
    if (email !== email2) {
      newState.errors.push("Your email and confirmation email do not match ")
    }
    if (newState.errors.length === 0) {
      // Insert Backend Here.
      const data = this.state
      fetch('/auth/register', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then((response) => {
        return response.json();
      }).then((response) => {

        if (response['registered']) {
          this.props.history.push('/Login')
        } else {
          this.setState(({ errors }) => ({
            errors: errors.concat(response['error'])
          }));

        }
      })
    }
    this.setState(newState);
  };

  render() {
    return (
      <div className="center mw-50">
        <Container className="container-bg rounded px-5 py-4 mx-4">
          <h2 className="text-dark text-center font-weight-bold">Register for a Gamers<mark class="green">Trade</mark> Account</h2>
          {this.state.errors.length > 0 ?
            this.state.errors.map((error, index) => {
              return <li key={index} className="text-warning"> {error} </li>
            })
            :
            <div></div>
          }
          <Form className="center w-50 mx-auto" onSubmit={this.handleSubmit}>
            <Form.Group controlId="formFirstName">
              <Form.Label className="text-dark font-weight-bold">First Name:</Form.Label>
              <Form.Control type="text" placeholder="First Name *"
                onChange={this.handleChange("firstname")} />
            </Form.Group>
            <Form.Group controlId="formLastName">
              <Form.Label className="text-dark font-weight-bold">Last Name:</Form.Label>
              <Form.Control type="text" placeholder="Last Name *"
                onChange={this.handleChange("lastname")} />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label className="text-dark font-weight-bold">Email:</Form.Label>
              <Form.Control type="email" placeholder="Email * "
                onChange={this.handleChange("email")} />
            </Form.Group> 
             <Form.Group controlId="formConfirmEmail">
              <Form.Label className="text-dark font-weight-bold">Confirm Email:</Form.Label>
              <Form.Control type="email" placeholder="Confirm Email * "
                onChange={this.handleChange("email2")} />
            </Form.Group>
             <Form.Group controlId="formUsername">
              <Form.Label className="text-dark font-weight-bold">Username:</Form.Label>
              <Form.Control type="text" placeholder="Username *"
                onChange={this.handleChange("username")} />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label className="text-dark font-weight-bold">Password:</Form.Label>
              <Form.Control type="password" placeholder="Password *"
                onChange={this.handleChange("password")} />
            </Form.Group>
            <Form.Group controlId="formConfirmPassword">
              <Form.Label className="text-dark font-weight-bold">Confirm Password:</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password *"
                onChange={this.handleChange("password2")} />
            </Form.Group>
            <p className="text-muted text-center">By clicking on "Create my account" below, you are agreeing to the Terms of Service above and the Privacy Policy</p>
            <Button variant="success" type="submit" size="lg" block
              onClick={this.handleSubmit}>
              Register
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}