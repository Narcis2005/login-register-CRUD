import React, {useState} from "react";
import Navigation from "../../components/nav";
import {useHistory} from "react-router-dom"
import {Form, Col, Container, Row, Button, ButtonGroup} from "react-bootstrap"
import axios from "axios";
const DeleteAccount = () => {
    let history = useHistory();
    const [oldPassword, setOldPassword] = useState("");
    const [check, setCheck] = useState(false);
    const Logout = () => {
        
        localStorage.removeItem("token");
       history.push("/")
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {
            token: localStorage.token,
            password: oldPassword
        }
        if(check == true){
          await  axios.delete("/api/delete-account", {data:data} )
                .then(newData => {
                    if (newData.data.status === "SUCCES"){
                        Logout();
                    }
                    
                })
        }
    }
    const handlePasswordChange = e => {
        setOldPassword(e.target.value)
    }
    const handleCheckChange = () => {
        setCheck(prevCheck => !prevCheck)
    }

    return(
        <>
        <Navigation />
        <Container className="justify-content-md-center">

            <Row className="align-items-center mt-5" >
                <Col md="2"></Col>
                <Col md="8">
                    <Form onSubmit={handleSubmit} className="mb-3">
                        <Form.Group >
                            <Form.Label>Old Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter old password" onChange={handlePasswordChange} value={oldPassword}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Are you sure you want to delete this account permanently?" onChange={handleCheckChange} checked={check}/>
                        </Form.Group>
                        
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                        {/* {status ? <p>{status}</p> : ""} */}
                </Col>
                <Col md="2"></Col>

            </Row>
          
        </Container>
        </>
    )
}

export default DeleteAccount;