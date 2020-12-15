import React from 'react';
import './Buy.css'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import api from "../../API/api"
import { Button, Card, Form, FormControl, InputGroup, ListGroup, ListGroupItem, Table } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Cookies from 'universal-cookie';

export default class Buy extends React.Component {
  componentDidMount() {
    const game = JSON.parse(localStorage.getItem('game'));
    this.setState({ game: game });
    this.setState({ gameId: game.id });
    this.setState({ console: "all" });
    localStorage.clear();
  }

  constructor(props) {
    super(props);
    const cookies = new Cookies()
    this.state = {
      console: "all",
      game: {},
      gameId: 0,
      gameListings: [],
      lowestPrice: 0.0,
      token: cookies.get('token'),
    };
  }
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const API = new api();
    API.getListings(this.state).then(gameListings => {
      this.setState({ gameListings: gameListings });
    });
  };

  render() {
    return (
      <Container fluid>
        <Row className="my-4 mx-3 p-4 justify-content-center bg-darkgreen text-black">
          <Form onSubmit={this.handleSubmit}>
            <InputGroup className="searchbar pt-4">
              <FormControl id="inlineFormInputGroup" placeholder="Search" onChange={this.handleChange("console")} />
              <InputGroup.Append>
                <Form.Control as="select" defaultValue="All Systems" className="options">
                  <option value="all">All Systems</option>
                  <option value="xbox 360">XBOX 360</option>
                  <option value="xbox one">XBOX ONE</option>
                  <option value="pc">PC</option>
                  <option value="ps3">PS3</option>
                  <option value="ps4" >PS4</option>
                  <option value="ps5">PS5</option>
                  <option value="switch">SWITCH</option>
                </Form.Control>
              </InputGroup.Append>
              <Button variant="outline-info" className="searchBtn" type="submit" onClick={this.handleSubmit}>Search</Button>
            </InputGroup>
          </Form>
        </Row>
        <Row className="px-5 py-3">
          <Col sm="6" md="4" lg="3">
            <Card style={{ width: '20rem' }} className="selection">
              <div className="card-img-top d-flex align-items-center">
                <Card.Img variant="top" className="image" src={this.state.game.image} />
                <Card.Body className="img-body">
                  <Card.Title>{this.state.game.title}</Card.Title>
                  <Card.Text>
                    {this.state.game.copy} Copy Available
                        </Card.Text>
                  <Card.Text>
                    Release Date: {this.state.game.date}
                  </Card.Text>
                  <Card.Text>
                    Genre: {this.state.game.type}
                  </Card.Text>
                  <Card.Text>
                    ESRB: {this.state.game.description}
                  </Card.Text>
                </Card.Body>
              </div>
              <ListGroup variant="flush" className="game-body">
                <ListGroupItem className="game-body">
                  <Card.Text>
                    {this.state.game.console}
                  </Card.Text>
                  <Card.Text>
                    Price: {this.state.game.price}
                  </Card.Text>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table bordered hover responsive>
              <thead>
                <tr>
                  <th>
                    Seller
                </th>
                  <th>
                    Condition
                </th>
                  <th>
                    Additional Information
                </th>
                  <th>
                    Price
                </th>
                </tr>
              </thead>
              <tbody>
                {this.state.gameListings.map((list, index) => (
                  <tr key={index}>
                    <td>
                      {list.userName}
                    </td>
                    <td>
                      {list.conditions}
                    </td>
                    <td>
                      {list.additionalNotes}
                    </td>
                    <td>
                      {list.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    );
  }
}