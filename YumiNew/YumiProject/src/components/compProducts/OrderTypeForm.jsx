import React from 'react';
import './OrderTypeForm.css'

function OrderTypeForm({setForm}) {
    return (
        <div className='orderForm'>
            <form action='orderType'>
                <input type="text" name="name" id="name" placeholder="Type your name"/>

                <input type="text" name="email" id="email" placeholder="Enter your email"/>

                <input type="number" name="number" id="number" placeholder="Enter your phone number"/>

                <input type="submit" id="submitButton" value="Send" disabled />

                <div className="btnBack" onClick={() => setForm(true)} >Back</div>
            </form>
            
            <div id="alert"></div> 
        </div>
    );
}

export default OrderTypeForm;