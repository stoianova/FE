import React from 'react';
import ForthProduct from '../../img/fixed/fix1.jpeg';

function SProductCardForth() {
    return (
        <div className='SProductCardForth'>
            
            <div className="imageForth ">
                <img src={ForthProduct} alt="" />
            </div>
            <div className="productTextForth">
                Yumi Fresh selection 2024 <br />
                Cold drinks <br />
                $ 5
            </div>


        </div>
    );
}

export default SProductCardForth;