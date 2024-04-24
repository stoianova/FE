import React, {useState} from 'react';
import './Cart.css'
import DeliveryForm from './DeliveryForm';

function OrderTypeForm({setForm}) {
    // const [away, setAway] = useState(true);

    return (
        <>
            <div className='deliveryType'>
                <p>Choose your delivery type</p>
                <button >Take away from Yumi Cafe</button>
                <button /* onClick={() => setAway(true)} */>Delivery with Yumi courier</button>
            </div>
            
            <div className="btnBack" onClick={() => setForm(true)} >Back</div>
 
            {/* {
                away ? <OrderTypeForm  setAway={setAway}/> : <DeliveryForm setAway={setAway}/>
            } */}
        </>
    );
}

export default OrderTypeForm;