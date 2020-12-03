import React from "react";
import './TransactionHistory.css';
import {Container, Row, Col, Table} from "react-bootstrap";

export default class TransactionHistory extends React.Component {
 constructor() {
    super();
    this.state = {
      games: []
    };
  }
  render() {
    return (
      <Container fluid>
        <Row>
            <Container fluid className="p-2 m-3">
              <Row className="mt-4 justify-content-left">
                <Col xs="auto">
                  <h3 data-testid="text">Transaction History</h3>
                </Col>
              </Row>
              <hr />
              <Row className="py-3 transaction-table">
                <Col>
                  <Table bordered hover responsive>
                    <thead>
                      <tr>
                        <th>
                          Transaction
                        </th>
                        <th>
                          Price
                        </th>
                        <th>
                          Date
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.games.map((list, index) => (
                        <tr key={index}>
                          <td>
                            {list.title}
                          </td>
                          <td>
                            {list.price}
                          </td>
                          <td>
                            {list.date}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </Container>
        </Row>
      </Container>
    );
  }
}