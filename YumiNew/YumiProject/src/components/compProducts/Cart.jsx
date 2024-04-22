import React, {useEffect, useState} from 'react';
import './Cart.css'

const Cart = ({cart, setCart, handleChange}) => {

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
        <article>
            {
                cart?.map((item)=>(
                    <div className="cartBox" key={item.id}>
                        <div className="cartImage">
                            <img src={item.image}/>
                            <p>{item.name}</p>
                        </div>
                        <div>
                            <button onClick={()=>handleChange(item, +1)}> + </button>
                            <button>{item.amount}</button>
                            <button onClick={()=>handleChange(item, -1)}> - </button>
                        </div>
                        <div>
                            <span>{item.price}</span>
                            <button onClick={() => handleRemove(item.id)}>Remove item</button>
                        </div>
                    </div>
                ))}
            <div>
                <span>Total price</span>
                <span>Rs - {price}</span>
            </div>
        </article>
    );
}

export default Cart;