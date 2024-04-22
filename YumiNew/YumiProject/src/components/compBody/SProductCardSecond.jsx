import React from 'react';
import SecondProduct from '../../img/fixed/fix5.jpeg';

function SProductCardSecond(props) {
    return (
        <div className='SProductCardSecond'>

            <div className="imageSecond ">
                <img src={SecondProduct} alt="" />
            </div>
            <div className="productTextSecond">
                Special release for specials <br />
                Milk collection <br />
                $ 5
            </div>
            
        </div>
    );
}

export default SProductCardSecond;