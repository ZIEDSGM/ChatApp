import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';
import MessageForm from '../components/MessageForm';
import './chat.css';

function Chat() {
  return (
   <Container>
    <Row >
      <Col className='chat_bg' md={4}>
        <Sidebar/>
      </Col>

      <Col md={8}>
      <MessageForm/>


      </Col>
    </Row>
   </Container>
  )
}

export default Chat