import React from 'react'
import texting from  './imgs/texting.jpg'
import audio from './imgs/audio.png'
import video from './imgs/video.jpg'
import meet from './imgs/2.jpg'
import classroom from './imgs/3.jpg'
import community from './imgs/1.jpg'
import { Col, Row } from 'react-bootstrap'

const Services = () => {
  return (
    <div>
    <section className='mt-5'>
      <h2 className='text-center'>Our Services</h2>
      <p className='fs-5 text-center'>We offer to our users many services </p>
      <Row className='mb-5' >
        <Col md={4}>
        <div className="card bg-light text-center mb-2" style={{maxWidth:"18rem",height:"22rem",marginLeft:100}}>
            <div className='card-header mx-4'>
              <img  src={texting} style={{height:200,width:200, borderRadius:"50%"}}/>
            </div>
            <div className='card-title'>
          Texting
            </div>
            <div className='card-text'>
           With short messaging, you can quickly send and receive text-based information.
            </div>
        </div>

        </Col>
        <Col md={4}>
        <div className="card bg-light text-center mb-2" style={{maxWidth:"18rem",height:"22rem",marginLeft:100}}>
            <div className='card-header mx-4'>
              <img  src={audio} style={{height:200,width:200, borderRadius:"50%"}}/>
            </div>
            <div className='card-title'>
          Audio Call
            </div>
            <div className='card-text'>
           
With the help of audio call services, you can engage in one-on-one conversations or participate in group discussions.
            </div>
        </div>

        </Col>
        <Col md={4}>
        <div className="card bg-light text-center mb-2" style={{maxWidth:"18rem",height:"22rem",marginLeft:100}}>
            <div className='card-header mx-4'>
              <img  src={video} style={{height:200,width:200, borderRadius:"50%"}}/>
            </div>
            <div className='card-title'>
          Video Call
            </div>
            <div className='card-text'>
           
It enables individuals to engage in face-to-face conversations in real-time using audio and video transmission.
            </div>
        </div>

        </Col>
      </Row>
        
      <Row >
        <Col md={4}>
        <div className="card bg-light text-center mb-2" style={{maxWidth:"18rem",height:"22rem",marginLeft:100}}>
            <div className='card-header mx-4'>
              <img  src={meet} style={{height:200,width:200, borderRadius:"50%"}}/>
            </div>
            <div className='card-title'>
            Online meetings
            </div>
            <div className='card-text'>
            It enable real-time discussions, presentations, and collaborations among participants who may be geographically dispersed.
            </div>
        </div>

        </Col>
        <Col md={4}>
        <div className="card bg-light text-center mb-2" style={{maxWidth:"18rem",height:"22rem",marginLeft:100}}>
            <div className='card-header mx-4'>
              <img  src={classroom} style={{height:200,width:200, borderRadius:"50%"}}/>
            </div>
            <div className='card-title'>
          Classroom
            </div>
            <div className='card-text'>
           
            It provides a streamlined and organized environment for teachers and students to collaborate, communicate, and manage their coursework.            </div>
        </div>

        </Col>
        <Col md={4}>
        <div className="card bg-light text-center mb-2" style={{maxWidth:"18rem",height:"22rem",marginLeft:100}}>
            <div className='card-header mx-4'>
              <img  src={community} style={{height:200,width:200, borderRadius:"50%"}}/>
            </div>
            <div className='card-title'>
          Create a Community
            </div>
            <div className='card-text'>
           
            a space for like-minded individuals to connect, engage in discussions, share content, and collaborate on specific topics or activities.

</div>
        </div>

        </Col>
      </Row>
      
    </section>
    </div>
  )
}

export default Services