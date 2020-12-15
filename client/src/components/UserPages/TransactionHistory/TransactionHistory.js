import React from "react";
import './TransactionHistory.css';
import api from '../../API/api'
import { Container, Row, Col, Table } from "react-bootstrap";
import Cookies from "universal-cookie";

export default class TransactionHistory extends React.Component {

  componentDidMount() {
    const cookies = new Cookies()
    const API = new api();
    API.getTransactionHistory({ token: cookies.get('token') }).then(resultList => {
      this.setState({'transactions' : resultList});
      console.log(this.state['transactions'])
    })
  }

  constructor() {
    super();
    this.state = {
      transactions: []
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
                    {this.state.transactions.map((list, index) => (
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