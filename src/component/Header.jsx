import React from 'react';
// import { Link, useNavigation } from 'react-router-dom';
import ActiveLink from './activeLink/ActiveLink';

const Header = () => {
    
    return (
        <div>
            <ActiveLink to={"/"}>Home</ActiveLink>
            <ActiveLink to={"/about"}>About</ActiveLink>
            <ActiveLink  to={"/friends"}>Friends</ActiveLink>
            <ActiveLink to={"/posts"}>Posts</ActiveLink>
            <ActiveLink to={"/contact"}>Contact</ActiveLink>
            <ActiveLink to={"/app"}>App</ActiveLink>
        </div>
    );
};

export default Header;