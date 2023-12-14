import './index.css'
import React from 'react';


const HamburgerMenu = () => {

    const showLinks = () => {
        const menu = document.querySelector('.hamburger');
        const links = document.querySelector('.nav_links');
        links.classList.toggle('active')
        menu.classList.toggle("change");
    }

    return (
        <div className="hamburger" onClick={() => showLinks()}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>
    )
}

export default HamburgerMenu