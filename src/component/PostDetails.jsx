import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const singlePost = useLoaderData();
    const {id, title, body} = singlePost;
    const navigate = useNavigate();
    const backPage = () =>{
        navigate(-1);
    }
    return (
        <div>
            <h1>post single details</h1>
            <h2>{title}</h2>
            <p>{body}</p>
            <button onClick={backPage}>back</button>
        </div>
    );
};

export default PostDetails;