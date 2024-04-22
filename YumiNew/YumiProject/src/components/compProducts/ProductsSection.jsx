import React from 'react';
import '../compProducts/ProductsSection.css';
import listProducts from './Products.jsx';
import Card from '../compProducts/Card';





// function ProductsSection({handleClick}) {

//     function createCard(listProducts) {
//         return <Card
//             id= {listProducts.id}
//             name= {listProducts.name}
//             localname= {listProducts.localname}
//             price= {listProducts.price}
//             image= {listProducts.image} handleClick={handleClick}/>
//     }

const ProductsSection = ({handleClick}) => {

    return (

        <section>
            {
                listProducts.map((item)=>(
                    <Card item={item} key={item.id} handleClick={handleClick}/>
                ))
            }
        </section>

    )


}



        <>

        <div id="linkProducts">

        <div className="productsSection">
            
            <div className="titleMenu container">
            CREAMY MILK TEA MADE WITH CAKE FLAVOURED CREME.
            </div>

            <div className="product container">

                {/* {listProducts.map(createCard)} */}

            </div>



            <div className="titleMenu">
            REFRESHING TEA MADE WITH A FULL CUP OF <br /> REAL FRUIT, NEVER TOO SWEET WITH NORMAL <br /> SUGAR LEVEL
            </div>

            <div className="titleMenu">
            THE CLASSIC MILK TEA WITH IN-DEPTH TASTE
            </div>

            <div className="titleMenu">
            SPRINGY AND LOW CALORIES, OUR TRUPIOCA JELLY MAKES THE DRINKS <br /> NEXT LEVEL DELICIOUS
            </div>

        </div>
        </div>
        
        </>

export default ProductsSection;