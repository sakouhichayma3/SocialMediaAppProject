import React from "react";
import "./style.css";


const Request=(props)=>{
    const {username} =props;
    
    return(
        <>
        <div className="request">
        <div className="request_details">
            <img className="user_image" src="https://images.pexels.com/photos/1906879/pexels-photo-1906879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            <p>
                <b> Pretty Girl</b> want to add you to friends
            </p>
        </div>
        <div className="request_answers">
        <button className="accept_button">accept</button>
        <button className="decline_button">decline</button>
        </div>
        
        </div>
        </>
    );
};
export default Request;