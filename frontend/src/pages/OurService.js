import React,{Fragment} from 'react';
import Header from "../components/Header";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import ThreeColBttn2 from '../components/Sections/threecolsbttn2';

import ourservices from "../data/OurWork/ourservices";


const OurService = () => {
    return (
        <Fragment>
            <Header/>
            <ThreeColBttn2 json={ourservices}/>
            <CallToAction/>
            <Footer/>
        </Fragment>
    )
};

export default OurService;