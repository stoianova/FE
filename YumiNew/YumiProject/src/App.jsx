import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/compHeader/Header';
import ProductsSection from './components/compProducts/ProductsSection'
import Footer from './components/compFooter/Footer';
import Cart from './components/compProducts/Cart';





const App = () => {

  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id)
      isPresent = true;
    });
    if (isPresent){
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, item])

  }

  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if( data.id === item.id)
        ind = index;
    });

    const tempArr = cart;
    tempArr[ind].amount += d;
    if (tempArr[ind].amount === 0 )
      tempArr[ind].amount = 1;
    setCart([...tempArr])
  }



  return (
    <>
      <Header size={cart.length} setShow={setShow}/>

      {
        show ? <ProductsSection handleClick={handleClick} /* setShow={setShow} *//> : <Cart cart={cart} setCart={setCart} setShow={setShow} handleChange={handleChange} />
      }

      {
        warning && <div className='warning'>Item already added to your cart</div>
      }
      <Footer/>
        


    </>
  )
}

export default App
