import React from 'react';

function OrderTypeForm() {
    return (
        <>
        <form action='orderType'>
            <input type="text" name="name" id="name" placeholder="Type your name"/>

            <input type="text" name="email" id="email" placeholder="Enter your email"/>

            <input type="number" name="number" id="number" placeholder="Enter your phone number"/>

            <input type="submit" id="submitButton" value="Send" disabled />


        </form>
        
        <div id="alert"></div> 
        </>
    );
}

export default OrderTypeForm;