import React from 'react'
import{ Nav, Navbar,Container,Button,NavDropdown} from "react-bootstrap";
import { useLogoutUserMutation } from '../services/appApi';
import {LinkContainer} from 'react-router-bootstrap';
import logo from '../assets/R.png' 
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
    function Navigation() {
      const user = useSelector((state=>state.user))
      const[logoutUser]=useLogoutUserMutation()
     

      async function handleLogout(e){
        e.preventDefault()
        await logoutUser(user)
        
        window.location.replace("/")

      }



      return (
        <Navbar bg="light" expand="lg">
         
          <LinkContainer to='/'>
            
           <Navbar.Brand>
            <img src={logo} style={{width:50 ,height:50}} />
           </Navbar.Brand>
           </LinkContainer>
           
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                {!user && (
                  <LinkContainer to="/login">
                  <Nav.Link >Logins</Nav.Link>
                  </LinkContainer> 
                )}
              
                <LinkContainer to="/chat">
                <Nav.Link >Chat</Nav.Link>
                </LinkContainer>
        
                {user && (
                   <NavDropdown title={
                    <>
                    <img src={user.picture} style={{width:30,height:30,marginRight:10,objectFit:'cover',borderRadius:"50%"}} />
                    {user.name}
                    </>
                   } id="basic-nav-dropdown">
                   <NavDropdown.Item href="#action/3.1">Another action</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.2"></NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                   <NavDropdown.Item >
                   <Button variant='danger' onClick={handleLogout}> LogOut </Button>
                   </NavDropdown.Item>
                 </NavDropdown>
                )}
               
              </Nav>
            </Navbar.Collapse>
  
        </Navbar>
      );
    }
    
  

export default Navigation;