import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import {Link} from "react-router-dom"


function Navigation () {
    
    return(
        <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="ml-auto ">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      {/* <NavLink to="/">About</NavLink> */}
      {localStorage.token ? <><Nav.Link as={Link} to="/profile" >Profile</Nav.Link> <Nav.Link as={Link} to="/logout">Logout</Nav.Link> </>: <> <Nav.Link as={Link} to="/login">Login</Nav.Link> <Nav.Link as={Link} to="/register">Register</Nav.Link> </> }
      
      
    </Nav>
    
  </Navbar>
 
</>
    )
}
export default Navigation;