import React from 'react';
import SWelcome from '../compBody/SWelcome'
import BackgroundImage from './BackgroundImage'
import SMenuDiv from '../compBody/SMenuDiv'
import SProductCardFirst from './SProductCardFirst'
import SProductCardSecond from './SProductCardSecond';
import SProductCardThird from './SProductCardThird';
import SProductCardForth from './SProductCardForth';
// import Footer from '../compFooter/Footer'
import ImageSlider from './ImageSlider';
// import ProductsSection from '../compProducts/ProductsSection';



function Section(props) {
    return (
        <>
            <div className="wrapperFirst d-grid">
                <BackgroundImage />
                <SWelcome/>
                <SMenuDiv />
                <SProductCardFirst />
                <SProductCardSecond/>
                <SProductCardThird/>
                <SProductCardForth/>
            </div>

            <div className="wrapperSecond">
                <ImageSlider/>
                {/* <ProductsSection/>
                <Footer/> */}

            </div>
        </>
    );
}

export default Section;