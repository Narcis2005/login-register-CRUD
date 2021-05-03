import React, {useState, useEffect} from "react"
import axios from "axios";
import Navigation from "../components/nav.js";
import { Button, Container, Row, Col, ButtonGroup} from "react-bootstrap";
import { useHistory } from "react-router-dom";
const Profile = () => {
    let history = useHistory();
    const [userData, setUserData] = useState({});
    useEffect ( () =>{
        if(localStorage.token){
            const token = {
                token: localStorage.token
            };
            axios.get("/api/data", {params:token})
                .then(data =>{
                    setUserData(data.data)
                })
                .catch(error => {
                    console.log(error);
                })
        }
        
    }, [])  
    const handleChangePassword = e => {
        e.preventDefault();
        history.push("/change-password")
    }
    const handleDeleteAccount = e => {
        e.preventDefault();
        history.push("/delete-account")
    }
    return(
        <>
            <Navigation />
            <Container >
                <Row className="justify-content-center text-center mt-5">
                    <Col lg="2"></Col>
                    <Col lg="8">
                       <p>Username: {userData.username}</p>
                       <p>Email: {userData.email}</p>
                       <ButtonGroup vertical >
                        <Button variant="secondary" className="my-2" onClick={handleChangePassword}>Click to change password</Button>
                        <Button variant="danger" onClick={handleDeleteAccount}>Click to delete account</Button>
                       </ButtonGroup>
                       
                    </Col>
                    <Col lg="2"></Col>
                </Row>
            </Container>
            
        </>
    )
}

export default Profile;