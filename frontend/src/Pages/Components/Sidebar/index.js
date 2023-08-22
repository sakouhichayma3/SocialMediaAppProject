import React from "react";
import './style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHome, faUsers,faPhotoFilm, faGear, faCalendarDays,} from "@fortawesome/free-solid-svg-icons"
import { faCalender , faCalenderDays, faUser,}from "@fortawesome/free-regular-svg-icons"
const Sidebar = () => {
    return(
        <>
        <div className="sidebar">
            <div className="sidebar_menu">
                <a className="active"> 
                    {" "}
                    <FontAwesomeIcon icon={faHome} className="me-3"/> <b>Home</b></a>
                <a>
                    {" "} <FontAwesomeIcon icon={faUsers} className="me-3"/><b>People</b></a>
                <a>
                {" "} 
                    <FontAwesomeIcon icon={faPhotoFilm}className="me-3"/><b>photos</b> </a>
                <a>
                    {" "}<FontAwesomeIcon icon={faCalendarDays}className="me-3"/><b>News Feed</b></a>
                <a>
                    {" "}<FontAwesomeIcon icon={faUsers} className="me-3"/> <b>Profile</b></a>
                <a>
                    {" "}<FontAwesomeIcon icon={faGear}className="me-3"/> <b>settings</b></a>

            </div>
        </div>
        
        </>
    );
};
export default Sidebar;