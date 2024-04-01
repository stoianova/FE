import React from 'react';
import netflixLogo from '../img/netflix-logo-png-25621.png'
import fridayLogo from '../img/Friday July 8th.png'
import searchPhoto from '../img/fe_search.png'
import accountPhoto from '../img/Ellipse 2.png'



function Header(props) {
    return (
        <>
        <header>
            <div className='main'>
                <div className="left">
                        <img src={netflixLogo} alt="" />
                    <div className="friday">
                        <img src={fridayLogo} alt="" />
                    </div>
                </div>

                <div className="right">
                    <img src={searchPhoto} alt="" />
                    <img src={accountPhoto} alt="" />
                </div>
                
            </div>
        </header>
        </>
    );
}

export default Header;