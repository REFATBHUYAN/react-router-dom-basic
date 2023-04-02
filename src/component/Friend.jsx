import React from 'react';
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    const {id, name, email, phone} = friend;
    return (
        <div>
            <h1>Name: {name}</h1>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p><Link to={`/friend/${id}`}>show details of friend</Link></p>
        </div>
    );
};

export default Friend;