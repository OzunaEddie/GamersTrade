import React from 'react';
import './Home.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form, Button, FormControl, InputGroup, Card, ListGroup, ListGroupItem, Table } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { withRouter } from 'react-router'


class Home extends React.Component {

  componentDidMount() {
    // Insert Backend Call For Textbooks When Nothing is on Search
    fetch('https://rawg.io/api/games?page_size=50')
      .then(response => response.json())
      .then(result => {
        console.log(result)
        let listGames = result.results;
        for (let i = 0; i < listGames.length; i++) {
          if (listGames[i]['esrb_rating'] == null) {
            continue;
          }
          console.log(result[i])
          let game = this.state.games.concat({
            id: listGames[i]['id'],
            title: listGames[i]['name'],
            copy: 0,
            type: listGames[i]['genres'][0]['name'],
            description: listGames[i]['esrb_rating']['name'],
            date: listGames[i]['released'],
            image: listGames[i]['background_image']
          });
          this.setState({ games: game });
        }

      })
  }


  constructor(props) {
    super(props);
    this.state = {
      search: "",
      games: [],
      price: "",
    };
  }
  handleChange = (input) => (e) => { };

  handleSubmit = (e) => { };

  selectedGame = (index,path) => (e) => {
    e.preventDefault(); 
    // Add Backend For When Textbook Is Clicked

    localStorage.setItem('game',JSON.stringify(this.state.games[index]));
    if(path == 'buy'){
      window.location.href = '/buy';
    }else if(path == 'sell'){
      window.location.href = '/sell';
    }else{
      window.location.href = '/trade';
    }
    
  }

  render() {

    return (
      <Container fluid>
        <Row className="my-4 mx-3 p-4 justify-content-center bg-darkgreen text-black">
          <Col md="auto" className="d-none d-md-block">
          </Col>
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
        <Row className="px-5 py-3">
          {
            this.state.games.map((list, index) => (
              <Col sm="6" md="4" lg="3">
                <Card style={{ width: '20rem' }} className="selection">
                  <div className="card-img-top d-flex align-items-center">
                    <Card.Img variant="top" className="image" src={list.image} />
                    <Card.Body className="img-body">
                      <Card.Title>{list.title}</Card.Title>
                      <Card.Text>
                        {list.copy} Copy Available
                        </Card.Text>
                      <Card.Text>
                        Release Date: {list.date}
                      </Card.Text>
                      <Card.Text>
                        Genre: {list.type}
                      </Card.Text>
                      <Card.Text>
                        ESRB: {list.description}
                      </Card.Text>
                    </Card.Body>
                  </div>
                  <ListGroup variant="flush" className="game-body">
                    <ListGroupItem className="game-body">
                    <Card.Text>
                      {list.console}
                    </Card.Text>
                    <Button variant="light" className="chooseBtn" onClick={this.selectedGame(index,'buy')} >Buy</Button>{' '} <Button variant="light" className="chooseBtn" onClick={this.selectedGame(index,'sell')} >Sell</Button>{' '}  <Button variant="light" className="chooseBtn" onClick={this.selectedGame(index,'trade')}>Trade</Button>
                    </ListGroupItem>
                  </ListGroup>
                </Card>
              </Col>
            ))
          }
        </Row>
      </Container>
    );
  }
}

export default withRouter(Home);