import React, {Fragment} from 'react';

import Header from '../components/Header'
import Footer from "../components/Footer";
import CallToAction from '../components/CallToAction';
import Slider from '../components/Slider/index';
import ApproachSection1 from '../components/OurApproach/ApproachSection1';
import NewsSection from '../components/Sections/news_section';


import ApproachSlideData from '../data/Slider/ourapproachslider.json';
import data1 from '../data/OurApproach/ApproachSectionData1.json';
import News1 from '../data/OurApproach/News1.json';

const OurApproach = () => {
    return (
        <Fragment>
            <Header/>
            <Slider json={ApproachSlideData}/>
            <ApproachSection1 json={data1}/>
            {/* <NewsSection json={News1}/>       */}
            <CallToAction/>
            <Footer/>           
        </Fragment>
    );
};

export default OurApproach;