import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';

export default class PrivacyPolicy extends React.Component {

 render() {
    return (
      <Container fluid >
        <Row className="my-5 mx-4 justify-content-left">
            <h1>GamersTrade Privacy Policy</h1>
        </Row>
        <Row className=" my-3 mx-4 justify-content-left">
            <h6>We are committed to respecting and protecting the privacy rights of our users and visitors.The following
            privacy policy explains our policy regarding the collection, use, and disclosure of your personal information.
            To further this commitment, we have adopted this Online Privacy Policy ("Privacy Policy") to guide how we
            collect, store, and use the information you provide us online. As we update and expand our services, this
            policy may change, so please refer back from time to time to ensure that you are aware of these changes,
            as we reserve the right to make amendments to the Privacy Policy. </h6>
        </Row>
        <Row className=" my-3 mx-4 justify-content-left">
            <h5><b>What is GamersTrade?</b></h5>
        </Row>
        <Row className=" my-3 mx-4 justify-content-left">
            <h6>GamersTrade is a platform for users to sell, buy, and trade games, consoles, or accessories. </h6>
        </Row>
        <Row className=" my-3 mx-4 justify-content-left">
            <h5><b>How does it work?</b></h5>
        </Row>
        <Row className=" my-3 mx-4 justify-content-left">
            <h6>Users can browse through the buy and trade menu for items they are interested in. Once the user
                has found something, they can click on that item and it will display a list of all the sellers or
                traders for that specific item. The user can then choose who they want to initiate the transaction with.</h6>
        </Row>
        <Row className=" my-3 mx-4 justify-content-left">
            <h5><b>What if I’m not satisfied with the options?</b></h5>
        </Row>
        <Row className=" my-3 mx-4 justify-content-left">
            <h6>Users have the option to initiate private communication with the dealer to work out a deal.</h6>
        </Row>
        <Row className=" my-3 mx-4 justify-content-left">
            <h5><b>How do I sell/trade games?</b></h5>
        </Row>
        <Row className=" my-3 mx-4 justify-content-left">
            <h6>Users who have registered an account can head to the Sell tab to place the item they are selling. If
                there are any changes or updates the user would like to make they can go to the My Listings tab in
                their account to perform the edits or add new items. </h6>
        </Row>
        <Row className=" my-3 mx-4 justify-content-left">
            <h6>For further inquiries or concerns, please contact us at <b>support@gamerstrade.com</b></h6>
        </Row>
      </Container>
    );
  }
}

