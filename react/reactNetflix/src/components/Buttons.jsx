import React from 'react';
import playBtn from '../img/play-circle-filled.png'


function Buttons(props) {

    return (
        <div className='buttons'>

            <button id='button-1' >
                <div className="stream">STREAM NOW</div>
                <img src={playBtn} alt="" />
            </button>

            <button id='button-2'>
                <div className="all">ALL EPISODES</div>
            </button>

                
        </div>
    );
}

export default Buttons;