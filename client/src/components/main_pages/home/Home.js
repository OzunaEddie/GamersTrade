import React from 'react';
import './Home.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Form, Button, FormControl, InputGroup} from 'react-bootstrap';


import Image from 'react-bootstrap/Image';


export default class Home extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }
  handleChange = (input) => (e) => {};

  handleSubmit = (e) => {};

  render() {

    return (
        <Container fluid>
        <Row className="my-4 mx-3 p-4 justify-content-center bg-darkgreen text-black">
          <Col md="auto" className="d-none d-md-block">

          </Col>
          {/*<Col md="auto" className="text-center">*/}
          {/*  <h2>Welcome to GamersTrade</h2>*/}
          {/*</Col>*/}
          <Form onSubmit={this.handleSubmit}>
                  <InputGroup className="searchbar pt-4">
                    <FormControl id="inlineFormInputGroup" placeholder="Search" onChange={this.handleChange("search")} />
                    <InputGroup.Append>
                      <Form.Control as="select" defaultValue="All Systems" className="options">
                            <option>All Systems</option>
                            <option>XBOX 360</option>
                            <option>XBOX ONE</option>
                            <option>PC</option>
                            <option>PS3</option>
                            <option>PS4</option>
                            <option>PS5</option>
                            <option>SWITCH</option>
                      </Form.Control>
                    </InputGroup.Append>
                    <Button variant="outline-info" className="searchBtn" type = "submit" onClick={this.handleSubmit}>Search</Button>
                  </InputGroup>
          </Form>
        </Row>
      </Container>
    );
  }
}