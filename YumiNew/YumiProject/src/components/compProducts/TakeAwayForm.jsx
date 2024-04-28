import React, { useState } from 'react';
import './TakeAwayForm.css'
import './DeliveryForm.css';
import {validName, validNumber} from './RegEx';
/* import Cart from './Cart';
 */
function TakeAwayForm({setAway/* , cart */}) {

    function firstFun(){
        let name = document.querySelector ('#name');
        let number = document.querySelector ('#number');

        if(validNumber.test(number.value) && validName.test(name.value)){
            submitButton.removeAttribute('disabled')
        }
        else{
            submitButton.setAttribute('disabled', true)
        }   }

        function secondFun(e){
            e.preventDefault()
            let name = document.querySelector ('#name');
            let number = document.querySelector ('#number');

            let newObj = {
                nameNew: '',
                numberNew: ''
            }
            newObj.nameNew = name.value
            newObj.numberNew = number.value

/*             let newArr = cart.push(newObj)
            console.log(newArr);
 */
            localStorage.setItem('.order', JSON.stringify(newObj));

            setTimeout(function another(){
                let inputs = document.querySelectorAll('input')
                for( let some of inputs){
                    some.value = ''
                }
            }, 0)
    }

    return (
        <>
        <div className="takeAwayForm">
            <form action='' onChange={firstFun} onSubmit={secondFun}>
                    <div className="orderText"> Your details for TAKE AWAY </div>

                <div className="innerFormDiv">
                    <div className='orderForm'>

                    <label htmlFor="name">Type your name *</label>
                    <input type="text" id="name" />

                    <label htmlFor="number">Enter your phone number *</label>
                    <input type="tel" id="number" /> 

                    <label htmlFor="time">Time to be ready at:</label>
                    <p className='smallText'>We performing your order as soon as possible <br />
                    However you can let us know if you need your order on specific time</p>
                    <input type="time" id="time"/> 

                    <label htmlFor="comments">Comments:</label>
                    <input type="text" id="comments"/> 

                    </div>
            </div>

            <div className="takeBtns">
                <div className="btnBack" onClick={() => setAway(true)} >Back</div>
                <input type="submit" id="submitButton" value="Send" disabled /> 
            </div>    

            </form>
            
        </div>
        </>
    );

    };

export default TakeAwayForm;