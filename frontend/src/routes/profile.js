import React, {useState, useEffect} from "react"
import axios from "axios";
import Navigation from "../components/nav";
import { Button, Container, Row, Col} from "react-bootstrap";
import { useHistory } from 'react-router-dom';
function Profile () {
    let history = useHistory();
    const [userData, setUserData] = useState({});
    useEffect ( () =>{
        if(localStorage.token){
            const token = {
                token: localStorage.token
            };
            axios.post("/api/data", token)
                .then(data =>{
                    setUserData(data.data)
                })
                .catch(error => {
                    console.log(error);
                })
        }
        
    }, [])  
    const handleChangePassword = (e) => {
        e.preventDefault();
        history.push("/change-password")
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
                       <Button variant="secondary" onClick={handleChangePassword}>Click to change password</Button>
                    </Col>
                    <Col lg="2"></Col>
                </Row>
            </Container>
            
        </>
    )
}

export default Profile;