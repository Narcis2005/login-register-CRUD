
import React, { useState} from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';
import Navigation from "./../components/nav";
import {Form, Button, Container, Row, Col} from "react-bootstrap";
function Login () {
    let history = useHistory();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState("");
  
    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        const loginCredentials = {
            username: username,
            password: password
        };
        axios.post("/api/login", loginCredentials)
            .then(data =>{
                if (data.data.status === "SUCCES"){
                    localStorage.setItem('token', data.data.token)
                    history.push("/");
                }
                else{
                    setStatus(data.data.message);
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

                <Form onSubmit={handleSubmit} className="mb-3">
  <Form.Group controlId="formBasicEmail">
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
</Form>
                        {status ? <p>{status}</p> : ""}
                </Col>
                <Col md="2"></Col>

            </Row>
          
        </Container>
       
        </>
    )
}

export default Login;