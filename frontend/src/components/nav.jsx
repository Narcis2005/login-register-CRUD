import React, {useEffect} from "react";
import { Navbar, Nav } from 'react-bootstrap';


function Navigation () {
    
    return(
        <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="ml-auto ">
      <Nav.Link href="/">Home</Nav.Link>
      {localStorage.token ? <><Nav.Link href="/profile">Profile</Nav.Link> <Nav.Link href="/logout">Logout</Nav.Link> </>: <> <Nav.Link href="/login">Login</Nav.Link> <Nav.Link href="/register">Register</Nav.Link> </> }
      
      
    </Nav>
    
  </Navbar>
 
</>
    )
}
export default Navigation;