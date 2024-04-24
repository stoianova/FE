import React from 'react';
// import './OrderTypeForm.css'
// import './Cart.css'
import OrderTypeForm from './OrderTypeForm';
import './DeliveryForm.css'

function DeliveryForm(/* {setAway} */) {
    return (
        <>
            <form action=''>
                <div className='orderForm'>
 
                <label htmlFor="name">Type your name</label>
                <input type="text" name="name" id="name"/> <br />

                <label htmlFor="email">Enter your email</label>
                <input type="text" name="email" id="email"/> <br />

                <label htmlFor="number">Enter your phone number</label>
                <input type="number" name="number" id="number"/> <br />

                <input type="submit" id="submitButton" value="Send" disabled /> <br />

                <div className="btnBack" onClick={() => setForm(true)} >Back</div>
                </div>
            </form>
            
            <div id="alert"></div> 
        </>
    );
}

export default DeliveryForm;