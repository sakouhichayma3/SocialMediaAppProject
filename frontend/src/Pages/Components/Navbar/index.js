import React from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus,faMagnifyingGlass,
 } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    return(
        <>
        <div className="navbar">

        
        <div className="navbar_left"> 
        <b>Bambi Media</b>
        </div>
        
        <div className="navbar_right">

            <div className="navbar_profil_search">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="small gray" />
                <input type ="text" placeholder="Search..."/>

            </div>

            <button className="navbar_profil_button">
            <FontAwesomeIcon icon={faSquarePlus} />{" "}
            Create
            </button>
            <div className="navbar_profil_image">
            <img src="https://broderies-diamant.com/cdn/shop/products/broderie-diamant-lettre-b-fleurie-303_1000x.jpg?v=1619612769" />
            </div>
        </div>

        </div>
        </>
    );
};
export default Navbar;