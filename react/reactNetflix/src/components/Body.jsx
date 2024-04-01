import React from 'react';

function Body(props) {
    return (

        <div className='content-wrapper'>

            <div className="drama">
                <div id="type1">Drama</div> 
                <div id="type2">Thriller</div>
                <div id="type3">Supernatural</div>
            </div>

                <h2>
                    Stranger Things
                </h2>

            <div className="director">
                <div id="year">2019</div>
                &nbsp; 
                <div id="director">DIRECTOR:</div>
                &nbsp;&nbsp;
                <div id="name">Shawn Levy</div>
                &nbsp;
                <div id="seasons">seasons:</div>
                &nbsp;
                <div id="episode">3 (5 Episodes)</div>
            </div>

            <p>
                In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.
            </p>

            {/* <div className="stars">
                <div id="star1">
                    <i className="fa-solid fa-star"></i>&nbsp;
                </div> 
                <div id="star2">
                    <i className="fa-solid fa-star"></i>&nbsp;
                </div>
                <div id="star3">
                    <i className="fa-solid fa-star"></i>&nbsp;
                </div>
                <div id="star4">
                    <i className="fa-regular fa-star"></i>&nbsp;
                </div>
                <div id="star5">
                    <i className="fa-regular fa-star"></i>&nbsp;
                </div>
            </div> */}

            <div className="fixed">
                <div className="age">
                    16+
                </div>
            </div>
           
        </div>
    );
}

export default Body;