import React,{useState} from 'react';
import{useLoginUserMutation}from "../services/appApi";
import {Col,Container,Row,Button, Spinner} from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function Logins() {
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState("")
  const navigate = useNavigate();
  const {socket}= useContext(AppContext);


  const[loginUser,{isLoading,error}]=useLoginUserMutation();
  function handleLogin(e){
e.preventDefault();
loginUser({ email, password}).then (({data}) =>{
  if (data) {
    
    socket.emit("new-user")

    navigate("/chat") ;
  }
})
  }




  
  return (
    
        <Row className='Login_bg' >
            
        <Col md={12} className='d-flex flex-row-reverse '>
    <Form style={{width:"80%" , maxWidth:500,marginTop:125}} onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        {error && <p className='alert alert-danger'>{error.data}</p>}
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=> setEmail(e.target.value)} value={email} required />
        <Form.Text className=" text-white">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} value={password} required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        {isLoading ? <Spinner animation="grow"/>: "Login"}
       
      </Button>
      <div className="py-4">
        <p className="text-center">
            Don't have an account ? <Link to="/signup" className='text-decoration-none text-danger'>Signup</Link>
            </p>
      </div>
    </Form>
    </Col>
    </Row>
    
  );
}

export default Logins;