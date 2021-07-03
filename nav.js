import React , { Component } from 'react';
import { NavLink ,NavNavLink } from 'react-router-dom';
const Nav=()=>{
    return(
        
        <div className="navbar">
            <div className ="container">
            <a href='#' className="logo">Logo </a>
            <ul>
                <NavLink exact to ="/">Home</NavLink>
                <NavLink exact to ="/about">About</NavLink>
                <NavLink exact to ="/bloc">blog</NavLink>

            </ul>
        </div>
        </div>
    )
}
export default Nav;