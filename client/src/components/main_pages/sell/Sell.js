import React from 'react';
import './Sell.css'
import Col from "react-bootstrap/Col";
import {Button, Card, Form, FormControl, InputGroup, ListGroup, ListGroupItem} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

export default class Sell extends React.Component {
  constructor() {
    super();
    this.state = {
      name:'',
      price:'',
      condition:'',
      info:'',
      search:'',
    };
  }
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };
  handleSubmit = (e) => {};

  render() {
    return (
      // <div>Sell Page</div>
      <Container fluid>
      <Row className="my-4 mx-3 p-4 justify-content-center bg-darkgreen text-black">
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
      <Row>
        <Container fluid className="p-2 m-3">
          <Row className="justify-content-left mt-4">
                  <Col xs="auto">
                    <Image className="img" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
                  </Col>
          </Row>
          <Form onSubmit={this.handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} sm="12" md="4" controlId="formGame">
                <Form.Label>Game</Form.Label>
                <Form.Control data-testid="name" className="sell-forms" as="select" value={this.state.name} onChange={this.handleChange("name")}>
                  <option value="">Choose</option>
                  <option value="1">Game 1</option>
                  <option value="2">Game 2</option>
                  <option value="3">Game 3</option>
                  <option value="4">Game 4</option>
                  <option value="5">Game 5</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
              <Form.Row>
                <Form.Group as={Col} sm="12" md="4" controlId="formPrice">
                  <Form.Label>Price</Form.Label>
                  <Form.Control data-testid="price" className="sell-forms" type="text" placeholder="Enter Price" value={this.state.price} onChange={this.handleChange("price")}/>
                </Form.Group>
                <Form.Group as={Col} sm="12" md="4" controlId="formCondition">
                  <Form.Label>Condition</Form.Label>
                  <Form.Control data-testid="cond" className="sell-forms" type="text" placeholder="Enter Condition" value={this.state.condition} onChange={this.handleChange("condition")}/>
                </Form.Group>
                <Form.Group as={Col} sm="12" md="4" controlId="formInfo">
                  <Form.Label>Additional Information</Form.Label>
                  <Form.Control data-testid="info" className="sell-forms" type="text" placeholder="Enter Information" value={this.state.info} onChange={this.handleChange("info")}/>
                </Form.Group>
            </Form.Row>
            <Button data-testid="add" type="submit" className="sellBtn" onClick={this.handleSubmit}>Submit</Button>
          </Form>
        </Container>
      </Row>
      </Container>
    );
  }
}