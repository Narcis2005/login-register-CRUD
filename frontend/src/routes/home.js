import React, {useEffect, useState}from "react";
import axios from "axios";
import Navigation from "./../components/nav";

const Home = () => {
    const [username, setUsername] = useState();
    useEffect ( () =>{
         const getData = async () => {
            if(localStorage.token){
                const token = {
                    token: localStorage.token
                };
                await axios.get("/api/data", {params:token})
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