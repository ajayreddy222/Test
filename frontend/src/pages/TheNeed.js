import React, {Fragment} from 'react';

import Header from '../components/Header'
import Paragraph from '../components/Sections/paragraphsect';
import Footer from "../components/Footer";
import Slider from '../components/Slider/index'; 
import CallToAction from '../components/CallToAction';
import ColBtn3 from '../components/Sections/threecolsbttn3';

import TheNeedSlider from '../data/Slider/theneed.json';
import paragraphData from '../data/TheNeed/paragraph.json';
import paragraphData2 from '../data/TheNeed/theneedparagraph2.json';
import colbtn3Data from '../data/TheNeed/colbtn3.json';

const TheNeed = () => {
    return (
        <Fragment>
            <Header/>
            <Slider json={TheNeedSlider}/>
            <Paragraph json={paragraphData}/>
            <Paragraph json={paragraphData2}/>
            <ColBtn3 json={colbtn3Data}/>
            <CallToAction/>
            <Footer/>
            
        </Fragment>
    );
};

export default TheNeed;