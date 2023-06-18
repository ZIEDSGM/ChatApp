import React from 'react'
import {Row,Col,Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './Home.css';
import About from './monsite/About';
import HomePage from './monsite/HomePage';
import Services from './monsite/Services';
import Contact from './monsite/Contact';

function Home() {
  return<>
   <Row className='home_bg'>
<Col md={6} className='d-flex flex-direction-column align-items-center justify-content-center'>
    <div>
        <h1>Share the world with your friends</h1>
        <p>TalkSquad lets you connect with the world</p>
        <LinkContainer to="/login">
            <Button  variant='primary'>
                get started
            
            <i className='fas fa-comments home-message-icon'></i>
            </Button>

        </LinkContainer>
     
        
        


    </div>
</Col >
</Row>

<HomePage/>
<Services/>
<About/>
<Contact/>


        </>
}

export default Home;