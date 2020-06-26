import React, {Fragment} from 'react';
import Header from '../components/Header'
import Content from "../components/OurPeople";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";

const OurPeople = () => {
    return (
        <Fragment>
            <Header/>
            <Content/>
            <CallToAction/>
            <Footer/>
            <LoginRegister/>
        </Fragment>
    );
};

export default OurPeople;