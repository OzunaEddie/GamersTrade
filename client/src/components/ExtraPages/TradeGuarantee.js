import React from 'react';
import {Row, Col, Container, ListGroup, ListGroupItem} from 'react-bootstrap';

export default class TradeGuarantee extends React.Component {

 render() {
    return (
      <Container fluid >
        <Row className="my-5 mx-4 justify-content-left">
            <h1>Trade Guarantee</h1>
        </Row>
        <Row className=" my-3 mx-4 justify-content-left">
            <h5><b>Problems With Your Trade?</b></h5>
        </Row>
        <Row className=" my-3 mx-4 justify-content-left">
            <h6>Follow these simple steps.</h6>
        </Row>
        <Container className="box">
                <Row className="my-5 justify-content-center">
                  <Col md="3" className="text-left">
                    <h3>1. Contact the User</h3>
                    <h6>Mistakes can happen. Contact the user and see if they can resolve the issue.</h6>
                  </Col>
                  <Col md="4" className="text-left">
                    <h3>2. Still Not Resolved?</h3>
                    <h6>If the issue is cannot be resolved, contact us at <b>support@gamerstrade.com</b> for further
                    help.</h6>
                  </Col>
                  <Col md="4" className="text-left">
                    <h3>3. We Will Fix the Problem</h3>
                    <h6>We will refund you the full amount. If it is something else, we will solve it for you. </h6>
                  </Col>
                </Row>
        </Container>
        <Row className=" my-3 mx-4 justify-content-left">
            <h5><b>What is The Trade Guarantee Policy?</b></h5>
        </Row>
        <Row className=" my-3 mx-4 justify-content-left">
            <h6>We do our best to provide the best platform and for you to trade, sell, or buy and experience. This means
            that items you buy or trade will be received and in good condition, items you sell will reach the buyer in
            a timely manner. However, there are times when mistakes happen and something goes wrong. To protect our
            users, we have this policy in place to ensure that you are covered for subjects as described below.</h6>
        </Row>
         <Row className=" my-3 mx-4 justify-content-left">
             <ListGroup>
                 <ListGroupItem/><b>1. Item was never received.</b>
                 <ListGroupItem/><b>2. Item does not match as described.</b>
                 <ListGroupItem/><b>3. Incorrect item was shipped to you.</b>
                 <ListGroupItem/><b>4. Received a damaged good.</b>
                 <ListGroupItem/><b>5. Received an empty package.</b>
             </ListGroup>
        </Row>
      </Container>
    );
  }
}

