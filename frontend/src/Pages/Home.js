
import React ,{ useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import UsernameCard from "./Components/UsernameCard";
import Sidebar from "./Components/Sidebar";
import Stories from "./Components/Stories";
import Requests from "./Components/Requests"

const Home =() =>{
    const [connectedUser,setConnectedUser] = useState({});

    const getConnectedUserData = ()=>{
        setConnectedUser( JSON.parse(localStorage.getItem("user_data"))) ;  

        
    };
useEffect(()=>{
    getConnectedUserData();
  
},[]);
    return(
    <>
    <Navbar/>
    <div className="layout-app">
        {/*left box*/}
        <div style={{
            width:"25%"
        }}>
        <UsernameCard />
    <Sidebar/>
        </div>{/*Middle box*/}

        <div style={{
            width:"50%"
        }}>
            <Stories/>


        </div>
        {/*right box*/}
       <Requests/>
    </div>
   



    <h6>Welcome To Media App </h6>
    </>
    );
};

export default Home;



