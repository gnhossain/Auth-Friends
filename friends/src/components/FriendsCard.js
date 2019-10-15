import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export default function FriendsCard(props){

    

    return(
        <div className='friend-card'>
            <h2>Name:{props.friend.name}</h2>
            <h3>Email:{props.friend.email}</h3>
            <h4>Age:{props.friend.age}</h4>
            
        </div>
    )
}