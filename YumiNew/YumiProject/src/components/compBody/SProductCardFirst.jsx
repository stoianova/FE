import React from 'react';
import FirstProduct from '../../img/fixed/fix7.jpeg'

function SProductCardFirst() {
    return (

        <div className='productCartFirst'>

            <div className='SProductCardFirst'>

                <div className="imageFirst d-flex justify-content-center">
                    <img src={FirstProduct} alt="" />
                </div>
            <div className="productTextFirst">
                Try our bestsellers! <br />
                Strawberry / Oreo / Creme <br />
                $ 6.5
            </div>
                
            </div>
            

        </div>
    );
}

export default SProductCardFirst;