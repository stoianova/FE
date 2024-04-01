import React from 'react';
import picOne from '../img/Rectangle 6 (1).png'
import picTwo from '../img/Rectangle 7 (1).png'
import picThree from '../img/Rectangle 8 (1).png'
import picFour from '../img/Rectangle 9 (1).png'
import picFive from '../img/Rectangle 11 (1).png'


function Films(props) {
    return (
        <>
            <div className="advert">

                <p className="popular">POPULAR THIS WEEK</p>
                <p className="strings">
                    <img src="" alt="" />
                    <img src="" alt="" />
                </p>

            </div>

            <div className="movies">

            <div id="pict">
                <img src={picOne} alt="" />
            </div>
            <div id="pict">
                <img src={picTwo} alt="" />
            </div>
            <div id="pict">
                <img src={picThree} alt="" />
            </div>
            <div id="pict">
                <img src={picFour} alt="" />
            </div>
            <div id="pict">
                <img src={picFive} alt="" />
            </div>

            </div>



        </>
    );
}

export default Films;