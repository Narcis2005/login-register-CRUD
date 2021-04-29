import React, {useState} from "react";
import Navigation from "./../components/nav";

import {Form, Col, Container, Row, Button} from "react-bootstrap"
import axios from "axios";
const ChangePassword = () =>{
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [status, setStatus] = useState("")
    const handleOldPassword = e => {
        setOldPassword(e.target.value);
    }
    const handleNewPassword = e => {
        setNewPassword(e.target.value);
    }
    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            token: localStorage.token,
            newPassword: newPassword,
            oldPassword: oldPassword
        };
        axios.put("/api/change-password", data)
            .then(data => {
                setStatus(data.data.message)
            })
            .catch(error => {
                setStatus(error.response.data.message)
            })
        setOldPassword("")
        setNewPassword("")
        
    }
    return (
        <>
            <Navigation />
            <Container className="justify-content-md-center">
                <Row className="align-items-center mt-5" >
                    <Col md="2"></Col>
                    <Col md="8">
                        <Form onSubmit={handleSubmit} className="mb-3">
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Old password</Form.Label>
                                <Form.Control type="password" placeholder="Enter old password" onChange={handleOldPassword} value={oldPassword}/>
                            </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                <Form.Label>New password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={handleNewPassword} value={newPassword}/>
                            </Form.Group>

                            <Button variant="primary" type="submit">
                            Change Password
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

export default ChangePassword;