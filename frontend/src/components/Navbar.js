import React from "react";
import { useDispatch } from "react-redux";

import './index.css'
import {ProfileHover} from "./ProfileHover";
import {SignInHover} from "./SignInHover";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";


export const NavBar = () => {

    const hideResponsiveNav = () => {
        const menu = document.querySelector(".hamburger");
        const links = document.querySelector(".nav_links");
        links.classList.toggle("active");
        menu.classList.toggle("change");
      };


    return (
    <div className="nav_bar">
        <Link className = "link" to="/"><h1>Appify</h1></Link>
        <div className="nav_links">
            <Link className = "link" to="/orders" onClick={() => hideResponsiveNav()}>My orders</Link>
            <Link className = "link" to="/signin" onClick={() => hideResponsiveNav()}><button>Sign in</button></Link>
        </div>
        <HamburgerMenu/>
    </div>
    )
}