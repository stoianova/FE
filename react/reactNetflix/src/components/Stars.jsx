import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faStar } from '@fortawesome/free-solid-svg-icons'

function Stars(props) {
const [isActive, setIsActive] = useState(false)
const toggleClass = () =>{
    setIsActive(!isActive)
}


    return (
            <div className="stars">
                <div id="star1">
                    <FontAwesomeIcon icon={faStar}/>
                </div>
                <div id="star2">
                    <FontAwesomeIcon icon={faStar}/>
                </div>
                <div id="star3">
                    <FontAwesomeIcon icon={faStar}/>
                </div>
                <div id="star4">
                    <FontAwesomeIcon icon={faStar}/>
                </div>
                <div  >
                    <FontAwesomeIcon icon={faStar}  className={isActive ? 'starY' :'star5'} onClick={toggleClass }/>
                </div>
            </div>
    );
}

export default Stars;


