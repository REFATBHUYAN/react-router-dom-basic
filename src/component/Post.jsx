import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {id, title, body} = post;
    const navigation = useNavigate();

    const hangleNavigation = () =>{
        navigation(`/post/${id}`);
    }

    return (
        <div>
            <h4>Title: {title}</h4>
            <p>Body: {body}</p>
            <Link to={`/post/${id}`}>post Details using link</Link>
            <Link to={`/post/${id}`}><button>post Details using btn</button></Link>
            <button onClick={hangleNavigation}>post Details using btn navigation</button>
        </div>
    );
};

export default Post;