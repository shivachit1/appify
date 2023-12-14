import React from "react";
import { Link } from "react-router-dom";

import '../index.css'


export const ShopView = () => {
    const shopList = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <div>
        <div>
            <h1>Here comes the shop banner!!!</h1>
            <p>Some description</p>
        </div>
        <div>
            <p>Our Product</p>
            <div className="flex-column">
                {shopList.map(shop => {
                     return <div className="card">
                            <h1>{shop}</h1>
                            </div>
                })}
            </div>
        </div>
    </div>
    
  );
}
