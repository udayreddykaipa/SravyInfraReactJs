import React, { useState } from 'react';
import apprt from "./../SIFluteNightAnim.png";
import apprtNoImg from "./../apartment-no-image.jpg";
import { Card, Button } from 'react-bootstrap'
import  {Modal, Form } from 'react-bootstrap'
// import firebase from 'firebase'

function BodyFirst() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
	function querySubmit(){
// 	const ref=firebase.database().ref("query").set({'user':'sdjh'})
// console.log(ref)
	
}

  return (

    <div>
      <Card className="bg-dark text-white">
        <Card.Img src={apprt} alt={apprtNoImg} rounded fluid />
        <Card.ImgOverlay>
          <Card.Title>SRAVYA INFRA PROJECTS PVT LTD</Card.Title>
          <Card.Text>
            Fullfilling Dreams of Own House
    </Card.Text>
          <Card.Text><Button className="btn btn-success" onClick={handleShow}> Enquire Now</Button></Card.Text>
        </Card.ImgOverlay>
      </Card>

      <Modal
        show={show}
        onHide={handleClose}
      >

        <Modal.Body>
          <Form>
            <Form.Group controlId="formFullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Full Name" />
            </Form.Group>

            <Form.Group controlId="formNumber">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control type="tel" placeholder="Enter 10 digit Mobile Number" />
            </Form.Group>
             (or)
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email or contact number with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formQuery">
              <Form.Label>Description of Query</Form.Label>
              <Form.Control as="textarea" placeholder="(optional) " />
             
            </Form.Group>

            <Button variant="primary" type="submit" onClick={querySubmit}>
              Submit
            </Button>
          </Form>
         
        </Modal.Body>

      </Modal></div>
  );
}


export default BodyFirst;

