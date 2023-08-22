import React from 'react';
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlusSquare } from "@fortawesome/free-solid-svg-icons";
const Story =(props) => {
    const {type,data } = props;
    return(
        <>

        {
            type === "new" ?(
            <div className='story new'>
                <FontAwesomeIcon icon={faPlusSquare} size="1" className="addIcon"/>
            <span>Add story</span>
            </div>
            ): 
            (
            <div className="story old" style={{backgroundImage:`url(${data.Story_photo})`,backgroundSize:"cover"}}>

                <div className="user-details">
                </div>
                <img src={data.user_photo}/>
                <h3>{data.username}</h3>

            </div>
        )}
        
        
        </>
    );

};
export default Story;