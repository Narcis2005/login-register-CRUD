import React, {useEffect, useState}from "react";
import axios from "axios";
import Navigation from "./../components/nav";

function Home () {
    const [username, setUsername] = useState({});
    useEffect ( () =>{
        if(localStorage.token){
            const token = {
                token: localStorage.token
            };
            axios.post("/username", token)
                .then(data =>{
                    setUsername(data.data)
                })
                .catch(error => {
                    console.log(error);
                })
        }
        
    }, [])  
    return(<>
        <Navigation />
        <p>{localStorage.token ? "Salut " + JSON.stringify(username)  : "Nu esti logat"}</p>
        </>
    )
}

export default Home;