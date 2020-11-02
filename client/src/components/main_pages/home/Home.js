import React from 'react';
import './Home.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


export default class Home extends React.Component {
 

  render() {
    return (
        <Container fluid>
        <Row className="my-4 mx-3 p-4 justify-content-center bg-darkgreen text-black">
          <Col md="auto" className="d-none d-md-block">
           
          </Col>
          <Col md="auto" className="text-center">
            <h2>Welcome to GamersTrade</h2>
          </Col>
        </Row>
      </Container>
    );
  }
}