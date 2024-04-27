import React, { useState } from 'react';
import './TakeAwayForm.css'
import {validName, validNumber} from './RegEx';



// function funNow(){
// if (validNumber.test(number) && validName.test(name)){ 
//     document.querySelector('#submitButton').removeAttribute = 'disabled'
// } 
// else { 
//     document.querySelector('#submitButton').setAttribute = 'disabled','true'}
//     }


function TakeAwayForm({setAway}) {

    // const [name, setName] = useState('');
    // const [number, setNumber] = useState('');
    // const [nameErr, setNameErr] = useState(false);
    // const [numberErr, setNumberErr] = useState(false);

    // const validate = () => {
    //     if (!validName.test(name)) {
    //         setNameErr(true);
    //     }
    //     if (!validNumber.test(number)) {
    //         setNumberErr(true);
    //     }
    // }

    function firstFun(){
        let name = document.querySelector ('#name');
        let number = document.querySelector ('#number');
        let time = document.querySelector ('#time');
        // let submitButton = document.querySelector ('#submitButton')

        if(validNumber.test(number) && validName.test(name)){
            submitButton.removeAttribute('disabled')
        }
        else{
            submitButton.setAttribute('dissabled', true)
        }   }

        function secondFun(e){
            e.preventDefault()
            let name = document.querySelector ('#name');
            let number = document.querySelector ('#number');
            // let time = document.querySelector ('#time');
            // let submitButton = document.querySelector ('#submitButton')

            let newObj = {
                nameNew: '',
                numberNew: ''
                // timeNew: ''
            }
            newObj.nameNew = name.value
            newObj.numberNew = number.value
            // newObj.timeNew = time.value

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

                    <label htmlFor="name">Type your name</label>
                    <input type="text" id="name" /* value={name} onChange={(e) => setName(e.target.value)} *//>

                    <label htmlFor="number">Enter your phone number</label>
                    <input type="number" id="number" /* value={number} onChange={(e) => setNumber(e.target.value)} *//> 

{/*                     {nameErr && <p className="errorsDiv">Name is invalid. Required 2-30 letters</p>}
                    {numberErr && <p className="errorsDiv">Number is invalid. Required format: 10 digits without spacing</p>}
 */}
                    {/* <label htmlFor="time">Time to be ready at:</label>
                        <input type="time" id="time"/> 
                    <div className="timeAndCheckbox">
                        <input type="radio" id="time" /> as soon as possible
                    </div> */}

                    {/* <label htmlFor="comments">Comments:</label>
                    <input type="text" id="comments"/>  */}

                    </div>
            </div>

            <div className="takeBtns">
                <div className="btnBack" onClick={() => setAway(true)} >Back</div>
                <input type="submit" id="submitButton" value="Send" disabled /* onClick={validate} */ /> 
                
            </div>    

            </form>
            
            {/* <div id="alert"></div>  */}
        </div>
        </>
    );

    };

export default TakeAwayForm;