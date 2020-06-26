import React,{Fragment} from 'react';
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import Content from "../components/OurMission";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";

const OurMission = () => {
    return (
    <Fragment>
        <Header/>
        <PageHeader
            bgImg={require('../assets/img/our-mission.jpg')}
            title="OUR Misson, Vison and Values"
        />
        <Content/>
        <CallToAction/>
        <Footer/>
        <LoginRegister/>
    </Fragment>
    );
};

export default OurMission;