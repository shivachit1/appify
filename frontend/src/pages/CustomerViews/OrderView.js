import React from "react";
import { Link, useParams } from "react-router-dom";

import '../index.css'

import { QRCodeComponent } from "../../components/QrCodeGenerator";
import { environmentConfig } from "../../config";

export const OrderView = () => {
    const { orderId } = useParams();
    console.log(orderId)
    return (
        <div>
            <QRCodeComponent websiteLink={`${environmentConfig.url}/orders/${orderId}/authenticate`} />
            <div className="card">
                <h1>1</h1>
            </div>
            <div className="card">
                <h1>2</h1>
            </div>
        </div>

    );
}