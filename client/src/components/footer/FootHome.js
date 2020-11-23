import React from 'react';
import {Card, ListGroup,ListGroupItem} from 'react-bootstrap';
import './FootHome.css';

export default class NavSurfer extends React.Component {

    render(){
        return(
            <Card.Footer className = "card-footer">
              <Card.Body>
                  <footer className="blockquote-footer">
                      <h8 className="title">Gamers<h8 className="trade">Trade</h8></h8>
                      <div className="about">
                        <Card.Text className="coltitle">ABOUT</Card.Text>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem className="list-group-item"><Card.Link className="colname" href="#">How it Works</Card.Link></ListGroupItem>
                            <ListGroupItem className="list-group-item"><Card.Link className="colname" href="#">Trade Guarantee</Card.Link></ListGroupItem>
                            <ListGroupItem className="list-group-item"><Card.Link className="colname" href="#">About Us</Card.Link></ListGroupItem>
                            <ListGroupItem className="list-group-item"><Card.Link className="colname" href="#">Contact Us</Card.Link></ListGroupItem>
                        </ListGroup>
                      </div>

                      <div className="games">
                        <Card.Text className="coltitle">GAMES BY SYSTEM</Card.Text>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem className="list-group-item"><Card.Link className="colname" href="#">XBOX 360</Card.Link>       <Card.Link className="colname" href="#">PC</Card.Link>  <Card.Link className="colname" href="#">PS3</Card.Link></ListGroupItem>
                            <ListGroupItem className="list-group-item"><Card.Link className="colname" href="#">XBOX ONE</Card.Link><Card.Link className="colname" href="#">PS4</Card.Link> <Card.Link className="colname" href="#">PS5</Card.Link></ListGroupItem>
                            <ListGroupItem className="list-group-item"><Card.Link className="colname" href="#">SWITCH</Card.Link></ListGroupItem>
                        </ListGroup>
                      </div>

                      <div className="help">
                        <Card.Text className="coltitle">HELP & SUPPORT</Card.Text>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem className="list-group-item"><Card.Link className="colname" href="#">FAQs</Card.Link></ListGroupItem>
                            <ListGroupItem className="list-group-item"><Card.Link className="colname" href="#">Terms and Conditions</Card.Link></ListGroupItem>
                            <ListGroupItem className="list-group-item"><Card.Link className="colname" href="#">Privacy Policy</Card.Link></ListGroupItem>
                        </ListGroup>
                      </div>
                  </footer>
              </Card.Body>
            </Card.Footer>
        )
    }
}