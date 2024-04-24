import React, {useEffect, useState} from 'react';
import './Cart.css'
import './OrderTypeForm.css'
import ButtonNext from './ButtonNext';
import OrderTypeForm from './OrderTypeForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Cart = ({cart, setCart, handleChange, setShow}) => {

    const [price, setPrice] = useState(0);
    const [form, setForm] = useState(true);

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
        // handlePrice();
    }

    useEffect(() => {
        handlePrice();
    })
    console.log(cart);
    return (
        <>
        <article>
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
                            <button className='btnIncrease' onClick={()=>handleChange(item, +1)}> + </button>
                            <button className='btnAmount'>{item.amount}</button>
                            <button className='btnDecrease' onClick={()=>handleChange(item, -1)}> - </button>
                            <button className='btnRemove' onClick={() => handleRemove(item.id)}>Delete</button>

                        </div>
                        </div>
                        </div>
                ))}

            <div className="bottomPart">
                <div className='totalDiv'>Total price ${price} </div> <br />
                <div className="cashDiv">
                    We accept cash payment only
                </div>                
            </div>

            <div className='inputSide'>
                <button className='btnClose' onClick={() => setShow(true)}> {closeMark} </button>
                {
                    form ? <ButtonNext setForm={setForm} /> : <OrderTypeForm setForm={setForm}/>
                }
            </div>


        </article>


        </>
    );
}

export default Cart;