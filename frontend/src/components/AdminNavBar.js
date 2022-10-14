import React,{useState,useEffect} from 'react';
import './HomeNavBar.css';
import './Header/Header.css';
import {Link} from 'react-router-dom';
import {AiOutlineDingding} from 'react-icons/ai';
import {useSelector,useDispatch} from 'react-redux';
import { FaShoppingCart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import {
    Form,
    FormControl,
    Nav,
    Navbar,
    NavDropdown,
  } from "react-bootstrap";


function AdminNavBar () {

  

    return(
        <Navbar bg="dark" expand="lg" variant="dark">
      

        <div id='hdLogo'> 
                <img alt="Logo"  src={require("../images/Cafe.png")} width="90"  height="55" className="d-inline-block align-top" /> 
            </div>
            
          <Navbar.Brand>
          <Link to='/admin-home' className='homenavbar-logo'>
                  Cafe SecretAlly
          </Link>
          </Navbar.Brand>
  
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            
          <Nav className="m-auto">
            <Form inline>
              
            </Form>
          </Nav>
  
              <Nav>
                {" "}
                <Nav.Link>
                <Link to='/view-feedback' className='homenav-links'>
                         Feedbacks
                      </Link>
                </Nav.Link>

                <Nav.Link>
                <Link to='/customer-home' className='homenav-links'>
                         Customer Home
                      </Link>
                </Nav.Link>
  
                
              </Nav>
              
            
             
            
          </Navbar.Collapse>
        
      </Navbar>
    );
}

export default AdminNavBar;