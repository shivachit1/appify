import React from "react";
import { Link, useParams } from "react-router-dom";

import '../index.css'

export const OrderPickUp = () => {
    const { orderId } = useParams();
    return (
        <div>
            <div className="card">
                <h1>1</h1>
            </div>
            <div className="card">
                <h1>2</h1>
            </div>
            <button>Accept</button>
            <button>Cancel</button>
        </div>

    );
}