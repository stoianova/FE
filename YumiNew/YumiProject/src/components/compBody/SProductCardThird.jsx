import React from 'react';
import ThirdProduct from '../../img/fixed/fix2.jpeg'


function SProductCardThird(props) {
    return (
        <div className='SProductCardThird'>
            <div className="imageThird ">
                    <img src={ThirdProduct} alt="" />
            </div>

            <div className="productTextThird">
                For CHEESY lovers <br />
                Lychee / Dragon Fruit / Mozzarella foam <br />
                $ 7
            </div>
            
        </div>
    );
}

export default SProductCardThird;