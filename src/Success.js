import React from 'react';
import whatsapplogo from './images/whatsapp.png';
import cancellogo from './images/cancel.png';

export default function Success(){
    return(
        <div className="success-container">
                <h2><b>Congratulation</b></h2>
                <div className="cols">
                    <b>Where will i get the gift card?</b>
                </div>
                <div className="cols">
                    <img src={whatsapplogo} alt="whatsapp logo" />
                    You will receive it on Whatsapp/SMS on your mobile.
                </div>
                <div className="cols">
                    <b>What if I cancel the order?</b>
                </div>
                <div className="cols">
                    <img src={cancellogo} alt="cancel logo" />
                    The voucher will not delivered if you cancel the order.
                </div>
            </div>
    )
}
