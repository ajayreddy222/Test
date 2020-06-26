import React,{Fragment} from 'react';
import Header from "../components/Header";
import ContactPage from "../templates/Contact";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";
import PageHeader from '../components/PageHeader';

const PageContact = () => {
    return (
        <Fragment>
            <Header/>
            <PageHeader
                bgImg={require('../assets/img/ContactUs.jpg')}
                title="Contact Us"
            />
            <ContactPage/>
            <CallToAction/>
            <Footer/>
            <LoginRegister/>
        </Fragment>
    );
};

export default PageContact;