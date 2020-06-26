import React, {Fragment} from 'react';

import Header from '../components/Header';
import Slider from '../components/Slider/index';
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import Section from '../components/Section';
import SectionThreeCol from '../components/Sections/threecols';
import ThreeColBttn from '../components/Sections/threecolsbttn';
import ThreeColBttn2 from '../components/Sections/threecolsbttn2';

import sectionJson from "../data/OurWork/OurWork.json";
import ourprograms from "../data/OurWork/ourprograms.json";
import ourservices from "../data/OurWork/ourservices.json";
import ourworkslider from "../data/Slider/ourworkslider.json";

const OurWork = () => {

    return (
        <Fragment>
            <Header/>
            <Slider json={ourworkslider}/>
            <SectionThreeCol json={sectionJson}/>
            <Section json={sectionJson}/>
            <ThreeColBttn json={ourprograms}/>
            <ThreeColBttn2 json={ourservices}/>
            <CallToAction/>
            <Footer/>           
        </Fragment>
    );
};

export default OurWork;