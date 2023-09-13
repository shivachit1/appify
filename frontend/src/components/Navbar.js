import React from "react";

import './index.css'
import {ProfileHover} from "./ProfileHover";
import {SignInHover} from "./SignInHover";

export const NavBar = () => {
    return (
    <div className="nav_bar">
        <h1>Appify</h1>
        <div>
            <button>Sign in
                <SignInHover/>
            </button>
            <button>
                <img className="small_image" src="" alt="DP"/>
                <ProfileHover/>
            </button>
            
        </div>
    </div>
    )
}