import React from 'react';
import './Sell.css'
import Col from "react-bootstrap/Col";
import api from "../../API/api"
import { Button, Card, Form, FormControl, InputGroup, ListGroup, ListGroupItem } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Cookies from 'universal-cookie';

export default class Sell extends React.Component {
  constructor() {
    super();
    const cookies = new Cookies()
    this.state = {
      game: [],
      gameId: 0,
      console: '',
      price: 0.0,
      condition: '',
      additionalNotes: '',
      buyOrTrade: 'buy',
      search: '',
      error: [],
      token: cookies.get('token'),
    };
  }

  componentDidMount() {
    const game = JSON.parse(localStorage.getItem('game'));
    this.setState({ game: game });
    this.setState({ gameId: game.id })
    localStorage.clear();
  }
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.condition === "") {
      this.state.error.push("Must specificy condition");
    }
    if (this.state.price < 0.0) {
      this.state.error.push("Price must be greater than $0");
    }

    console.log("BEFORE API");
    if (this.state.error.length == 0) {
      console.log("DOING API");
      const API = new api();
      API.addListing(this.state);
    }
  };

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
              <Button variant="outline-info" className="searchBtn" type="submit" onClick={this.handleSubmit}>Search</Button>
            </InputGroup>
          </Form>
        </Row>
        <Row>
          <Container fluid className="p-2 m-3">
            <Row className="justify-content-left mt-4">
              <Col xs="auto">
                <Image className="img" src={this.state.game.image} />
              </Col>
            </Row>
            <Form onSubmit={this.handleSubmit}>
              <Form.Row>
                <Form.Group as={Col} sm="12" md="4" controlId="formGame">
                  <Form.Label>Console</Form.Label>
                  <Form.Control data-testid="console" className="sell-forms" as="select" value={this.state.name} onChange={this.handleChange("console")}>
                    <option value="xbox 360">XBOX 360</option>
                    <option value="xbox one">XBOX ONE</option>
                    <option value="pc">PC</option>
                    <option value="ps3">PS3</option>
                    <option value="ps4" >PS4</option>
                    <option value="ps5">PS5</option>
                    <option value="switch">SWITCH</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} sm="12" md="4" controlId="formPrice">
                  <Form.Label>Price</Form.Label>
                  <Form.Control data-testid="price" className="sell-forms" type="text" placeholder="Enter Price" value={this.state.price} onChange={this.handleChange("price")} />
                </Form.Group>
                <Form.Group as={Col} sm="12" md="4" controlId="formCondition">
                  <Form.Label>Condition</Form.Label>
                  <Form.Control data-testid="cond" className="sell-forms" type="text" placeholder="Enter Condition" value={this.state.condition} onChange={this.handleChange("condition")} />
                </Form.Group>
                <Form.Group as={Col} sm="12" md="4" controlId="formInfo">
                  <Form.Label>Additional Information</Form.Label>
                  <Form.Control data-testid="info" className="sell-forms" type="text" placeholder="Enter Information" value={this.state.info} onChange={this.handleChange("additionalNotes")} />
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