import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    // console.log(friend);
    const navigate = useNavigate();
    const backPage = () =>{
        navigate(-1);
    }
    return (
        <div>
            <h1>details of single friend</h1>
            <p>Name: {friend.name}</p>
            <p>Phone: {friend.phone}</p>
            <button onClick={backPage}>back</button>
        </div>
    );
};

export default FriendDetails;