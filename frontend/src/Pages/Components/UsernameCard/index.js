import React from 'react';

import './style.css';
const UsernameCard=() =>{
    return(
        <>
        <div className='username_card'>
            <div className='username_card_image'>
                <h3 className='profile_caractere'></h3>
                <img src='https://images.pexels.com/photos/1187823/pexels-photo-1187823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />

            </div>
            <div className='username_card_info'>
                <h3 className='username'> Pretty Girl</h3>
                <span className='small'> @Pretty Girl</span>

            </div>

        </div>
        </>
    )
}
export default UsernameCard;