import React from 'react';
import QRCode from 'qrcode.react';

import './index.css'

export const QRCodeComponent = ({websiteLink}) => {
  return <QRCode value={websiteLink} includeMargin={true} size={220} level='H' bgColor={"rgb(53, 54, 58)"} fgColor={"#FFFFFF"}/>;
};