import React from "react";
import { Link } from "react-router-dom";

import '../index.css'

export const Orders = () => {
    const shopList = [1, 2, 3, 4, 5, 6, 7, 8]
    return (
        <div>
            <h1>My Orders</h1>
            <h2>OnGoing Orders</h2>
            <div className="flex-column">
                {shopList.map(shop => {
                    return <Link className="link" to={`/orders/${shop}`}>
                        <div className="card">
                            <h1>{shop}</h1>
                        </div>
                    </Link>
                })}
            </div>
            <h2>Completed Orders</h2>
            <div className="flex-column">
                {shopList.map(shop => {
                    return <Link className="link" to={`/orders/${shop}`}>
                        <div className="card">
                            <h1>{shop}</h1>
                        </div>
                    </Link>
                })}
            </div>
        </div>

    );
}