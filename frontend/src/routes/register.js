
import React, { useState} from "react";
import axios from "axios";

import Navigation from "./../components/nav";
import {Form, Button, Container, Row, Col} from "react-bootstrap";
function Register () {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [registerStatus, setRegisterStatus] = useState("")
    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        const registerCredentials = {
            email: email,
            username: username,
            password: password
        };
        axios.post("/register", registerCredentials)
            .then(data =>{
                if (data.data.status === "SUCCES"){
                    setRegisterStatus(data.data.message)
                }
                else{
                    console.log(data.data)
                }
            })
            .catch(error => {
                console.log(error)
            })
    }
    return(<>
        <Navigation />
        <Container className="justify-content-md-center">

            <Row className="align-items-center mt-5" >
                <Col md="2"></Col>
                <Col md="8">

                <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange}/>
  
  </Form.Group>
  <Form.Group controlId="formBasicUsername">
    <Form.Label>Username</Form.Label>
    <Form.Control type="text" placeholder="Enter username" onChange={handleUsernameChange}/>
  
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange}/>
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
  {registerStatus ? <p>{registerStatus}</p> : ""}
</Form>
                </Col>
                <Col md="2"></Col>

            </Row>
          
        </Container>
       
        </>
    )
}

export default Register;