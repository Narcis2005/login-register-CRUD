import React, {useEffect, useState}from "react";
import axios from "axios";
import Navigation from "./../components/nav";

function Home () {
    const [username, setUsername] = useState();
    useEffect ( () =>{
        async function getData () {
            if(localStorage.token){
                const token = {
                    token: localStorage.token
                };
                await axios.post("/api/data", token)
                    .then(data =>{
                        setUsername(data.data.username)
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }
        }
        getData();
        
        
    }, [])  
    return(<>
        <Navigation />
        <p>{localStorage.token ? "Salut " + username  : "Nu esti logat"}</p>
        </>
    )
}

export default Home;