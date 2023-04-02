import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from './Friend';

const Friends = () => {
    const data = useLoaderData();
    // console.log(data)
    return (
        <div>
            <h1>These are my friends</h1>
            {
                data.map(d => <Friend
                key={data.id}
                friend = {d}
                ></Friend>)
            }
        </div>
    );
};

export default Friends;