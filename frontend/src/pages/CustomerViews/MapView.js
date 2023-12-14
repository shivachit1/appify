import React from "react";
import { Link } from "react-router-dom";

import '../index.css'

import { SearchBar } from "../../components/SearchBar";

export const MapView = () => {
    const shopList = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <div className="mapView">
        <SearchBar/>

        <div>
            <Link className = "link" to="/"><button>Restaurant</button></Link>
            <Link className = "link" to="/"><button>Bar</button></Link>
            <Link className = "link" to="/"><button>Explore</button></Link>
            <Link className = "link" to="/"><button>Explore</button></Link>
        </div>

        <div>
            <p>Near you</p>
            <div className="flex-row">
                {shopList.map(shop => {
                     return <Link className = "link" to="/shopview">
                                <div className="card">
                                 <h1>{shop}</h1>
                                </div>
                            </Link>
                })}
            </div>
        </div>
    </div>
    
  );
}
