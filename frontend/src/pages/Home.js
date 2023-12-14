import React from "react";
import { Link } from "react-router-dom";

import './index.css'

import { SearchBar } from "../components/SearchBar";

export const Home = () => {
  return (
    <div>
        <div className= "horizontal_flex">
            <div>
                <h1 className="big_text">Linkme: Your <br/>nearby shop linker</h1>
                <Link className = "link" to="/mapview"><button>Explore</button></Link>
            </div>
            <div>
                <h1>Here comes svg</h1>
            </div>
        </div>

        <div>
            <h1>What we do</h1>
            <p>We connect you with nearest restaurant and bars.</p>
        </div>
    </div>
    
  );
}
