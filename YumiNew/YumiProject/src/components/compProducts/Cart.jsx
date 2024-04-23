import React, {useEffect, useState} from 'react';
import './Cart.css'

const Cart = ({cart, setCart, handleChange, setShow}) => {

    const [price, setPrice] = useState(0);

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
                                <div className="cartItemAmount">x1{/* {item.amount} */} </div>                                
                                <div className='cartItemPrice'>${item.price}</div>

                            </div>
                            <div className="infoCartRight">
                                <img src={item.image}/> <br />
                            </div>

                        </div>
                        
                        <div className='buttonsCart'>
                            <button className='btnIncrease' onClick={()=>handleChange(item, +1)}> + </button>
                            <button className='btnAmount'>{item.amount}</button>
                            <button className='btnDecrease' onClick={()=>handleChange(item, -1)}> - </button>
                            <button className='btnRemove' onClick={() => handleRemove(item.id)}>Remove item</button>
                        </div>
                        {/* <div>
                            
                        </div> */}
                        {/* <div className="closeBtn">
                            <button className='btnClose' onClick={()=>setShow(false)}>close</button> */}
                        </div>
                    /* </div> */
                ))}
            <div>
                <div className='totalDiv' /* onClick={()=>setShow(false)} */>Total price ${price} </div>
                <div className="cashDiv">
                    We accept cash payment only
                </div>
                <button className='btnClose' onClick={() => setShow(true)}>Close window</button>
                <button className='btnNext' /* onClick={() => setShow(true)} */>Next</button>

            </div>
        </article>

        </>
    );
}

export default Cart;