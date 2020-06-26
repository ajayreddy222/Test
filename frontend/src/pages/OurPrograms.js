import React, {Fragment} from 'react';
import Header from '../components/Header'
import Footer from "../components/Footer";
import CallToAction  from '../components/CallToAction';
import ThreeColBttn from '../components/Sections/threecolsbttn';
import ourprograms from "../data/OurWork/ourprograms";


const OurPrograms = () => {
    return (
        <Fragment>
            <Header/>
            <ThreeColBttn json={ourprograms}/>
            <CallToAction/>
            <Footer/>
        </Fragment>
    );
};

export default OurPrograms;