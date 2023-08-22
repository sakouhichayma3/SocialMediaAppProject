import React from "react";
import './style.css';
import Request from './Request';
const Requests=()=>{
    const requests =[
        {
            username:'Pretty Girl',
            profile_image :'https://images.pexels.com/photos/1906879/pexels-photo-1906879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            username:'rondinho ',
            profile_image :'https://images.pexels.com/photos/1906879/pexels-photo-1906879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },  {
            username:'bernard',
            profile_image :'https://images.pexels.com/photos/1906879/pexels-photo-1906879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }
    ]
    return(
        <>
        <div className="requests">
            <div className="requests_title">
                <h4>Requests</h4>
                <h4 className='requests_number'>5</h4>


            </div>

<Request/>
<Request/>
<Request/> 
            

        </div>
        
        </>
    );
};  
   
export default Requests;