import React from 'react';
import logo from '../../img/clientsPics/logo.gif'
// import HButtons from './HButtons';
import HInfo from './HInfo';
import '../compHeader/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Body from '../compBody/Section'


const Header = ({size, setShow}) => {

    const buttonAddHeader = <FontAwesomeIcon icon={faBasketShopping} />

    return (
        <>
            <header>

                <div className="headerContentWrapper container d-flex justify-content-around ">

                    <div className="logo" onClick={()=>setShow(true)}>
                        <img src={logo} alt="logo" />
                    </div>

                    <HInfo/>

                    <div className="headerRight">

                        <button className="buttonAddHeader" onClick={()=>setShow(false)}>

                            <div>
                                {/* <div className="buttonAddHeader"> */}
                                    {buttonAddHeader}
                                {/* </div>                            */}
                            </div>
                            <span>{size}</span>

                        </button>

{/*                         <button className='headerButtonOrderNow'>Order now</button>
 */}                                
                        </div>
                        


                </div>

            </header>
            <Body />
        </>
    );
}



// function Header({size}) {

//     const buttonAddHeader = <FontAwesomeIcon icon={faBasketShopping} />

//     return (
//             <header>
//                 <div className="headerContentWrapper container d-flex justify-content-around ">
//                     <div className="logo">
//                         <img src={logo} alt="" />
//                     </div>
//                     <HInfo/>
//                     <div className="headerRight">

//                         <button className='buttonAddHeader' type="button" >
//                             {buttonAddHeader}
//                         </button>
//                         <span>{size}</span>

//                         <button className='headerButtonOrderNow' type="button">Order now</button>
                                
//                         </div>

//                     {/* <HButtons/> */}
//                 </div>
//             </header>
//     );
// }


export default Header;