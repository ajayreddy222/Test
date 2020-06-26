import React,{Fragment} from 'react';
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import Content from "../components/OurHistory";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";


const OurHistory = () => {
    return (
        <Fragment>
            <Header/>
            <PageHeader
            bgImg={require('../assets/img/Our-History.jpg')}
            title="OUR History"
            />
            <Content/>
            <CallToAction/>
            <Footer/>
            <LoginRegister/>
        </Fragment>
    );
};

export default OurHistory;