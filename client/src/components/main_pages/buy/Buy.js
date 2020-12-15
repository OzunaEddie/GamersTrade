import React from 'react';
import './Buy.css'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Button, Card, Form, FormControl, InputGroup, ListGroup, ListGroupItem, Table} from "react-bootstrap";
import Container from "react-bootstrap/Container";

export default class Buy extends React.Component {
  componentDidMount() {

    // Change this to authenticate the user
    // It currently gets the token and check if a username exist.
    // If it exists then it is an authorized user.
    const game = JSON.parse(localStorage.getItem('game'));
    this.setState({ game: game });
    localStorage.clear();
  }

  constructor(props) {
    super(props);
    this.state = {
      search: "",
      game: {},
      price:"",
      user: [],
      rating:"",
    };
  }
  handleChange = (input) => (e) => {};

  handleSubmit = (e) => {};

  render() {
    return (
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
        <Row className="px-5 py-3">
          <Col sm="6" md="4" lg="3">
              <Card style={{ width: '20rem'}} className="selection">
                  <div className="card-img-top d-flex align-items-center">
                      <Card.Img variant="top" className = "image" src={this.state.game.image} />
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
                  Rating
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
              {this.state.user.map((list, index) => (
                  <tr key={index}>
                    <td>
                      {list.name}
                    </td>
                    <td>
                      {list.rating}
                    </td>
                    <td>
                      {list.condition}
                    </td>
                    <td>
                      {list.info}
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