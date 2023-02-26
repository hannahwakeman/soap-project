import * as React from 'react';
import { Col, Container, Row, Stack } from 'react-bootstrap';
import TextCard from '../shared/TextCard';
import './Contact.scss';

export default function Contact(props) {
  let elements = [
    <TextCard className="card" margin="5px">
      <p className="contact-header">Contact Us</p>
    </TextCard>,
    <TextCard className="card" margin="5px">
      <p>(315) 100-0001</p>
      <p>contact@summerbabystudios.com</p>
      <p>123 Soapin St, Soapville, Ny 10000</p>
    </TextCard>,
    <img
      className="d-block w-100 round margin-5"
      src="https://www.soapexpressions.com/wp-content/uploads/2022/11/Soap-Making.jpg"
    />,
    <TextCard className="card" margin="5px">
      <img
        className="d-block w-100 round"
        src="https://soapdelinews.com/wp-content/uploads/2015/07/how-to-make-soap-from-scratch.jpg"
      />
      <p>&nbsp;</p>
      <p>
        The waves crashed against the shore, sending spray into the air and
        filling the beach with the sound of their constant rhythm. The sound of
        laughter and chatter filled the air, as families and friends gathered
        for the holiday feast.
      </p>
    </TextCard>,
  ];

  let layout;
  if (props.isMobile) {
    layout = (
      <Stack>
        {elements[0]}
        {elements[1]}
        {elements[2]}
        {elements[3]}
      </Stack>
    );
  } else {
    layout = (
      <Container>
        <Row className="row">
          <Col>{elements[0]}</Col>
          <Col>{elements[1]}</Col>
        </Row>
        <Row className="row">
          <Col>{elements[2]}</Col>
          <Col className="imageListBottom">{elements[3]}</Col>
        </Row>
      </Container>
    );
  }

  return layout;
}
