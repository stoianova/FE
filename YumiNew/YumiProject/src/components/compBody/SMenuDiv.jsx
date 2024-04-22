import React from 'react';
import './MenuBtn.css'
import MenuBtn from './MenuBtn';

function SMenuDiv(props) {
    return (
        <>
            <div className='menuDiv'>
                <p className='menusecond'>Explore our menu of mouthwatering bubble tea creations, including classic favorites and innovative specialty drinks.</p>
                {/* <button className='menufirst'>Menu</button> */}
                <MenuBtn/>
        </div>
        </>
    );
}

export default SMenuDiv;