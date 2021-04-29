import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import {Link} from "react-router-dom"


 const Navigation = () => {
  
    return(
        <>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="ml-auto ">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              {localStorage.token ? <><Nav.Link as={Link} to="/profile" >Profile</Nav.Link> <Nav.Link onClick={() => localStorage.removeItem("token")} as={Link} to="/">Logout</Nav.Link> </>: <> <Nav.Link as={Link} to="/login">Login</Nav.Link> <Nav.Link as={Link} to="/register">Register</Nav.Link> </> }     
            </Nav>
          </Navbar>
        </>
    )
}

export default Navigation;