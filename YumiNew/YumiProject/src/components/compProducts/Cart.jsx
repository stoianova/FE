import React, {useEffect, useState} from 'react';
// import App from '../../App';
import './Cart.css'
import './OrderTypeForm.css'
import OrderTypeForm from './OrderTypeForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import DeliveryForm from './DeliveryForm';
import TakeAwayForm from './TakeAwayForm';

let cart = [];

const Cart = ({cart, setCart,/*  setShow, */ handleChange}) => {

    const [price, setPrice] = useState(0);
    const [delivery, setDelivery] = useState(true);
    const [away, setAway] = useState(true);

    const closeMark = <FontAwesomeIcon icon={faXmark} />


    const handlePrice = () => {
        let ans = 0;
        cart.map((item) => (
            ans += item.amount * item.price
        ))
        setPrice(ans);
    }

    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);
    }

    useEffect(() => {
        handlePrice();
    })

    function myfun (){
        if (delivery === true && away === true){ 
        return <OrderTypeForm setDelivery={setDelivery} setAway={setAway} /* setShow={setShow} *//>
        }
        else if (delivery === true && away !== true){ 
        return <TakeAwayForm setAway={setAway}/>
        }
        else if (delivery !== true && away === true){ 
        return <DeliveryForm setDelivery={setDelivery}/>
        }
    }

    return (
        <article>
           

                <div className="leftSideCart"> 
                    <div className='leftInnerScroll'>
            {
            cart?.map((item)=>(
                    <div className="cartBox" key={item.id}>

                        <div className="cartObject">

                            <div className="infoCartleft">
                                <p className='cartItemName'>{item.name}</p>
                                <div className="cartItemAmount">x1</div>                                
                                <div className='cartItemPrice'>${item.price}</div>
                            </div>

                            <div className="infoCartRight">
                                <img src={item.image}/> <br />
                            </div>

                        <div className='buttonsCart'>

                            <div className="btnCount">
                                <button className='btnDecrease' onClick={()=>handleChange(item, -1)}> - </button>
                                <button className='btnAmount'>{item.amount}</button>
                                <button className='btnIncrease' onClick={()=>handleChange(item, +1)}> + </button>
                            </div>

                            <button className='btnRemove' onClick={() => handleRemove(item.id)}>{closeMark}</button>
                        </div>

                        </div>
                    </div>
            ))}     </div>
                    <div className="bottomPart">
                        <div className='totalDiv'>Total price ${price} </div> <br />
                        <div className="cashDiv">We accept cash payment only</div>                
                    </div>

                </div>
            
            {
                myfun()
            }

        </article>
    );

}

export default Cart;

console.log(cart)
