import React, {Fragment} from 'react';

import Header from '../components/Header'

import Footer from "../components/Footer";

import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";

const Survey = () => {
    return (
        <Fragment>
            <Header/>
                
            <Footer/>

            <h1> page for survey</h1> 

            <MobileMenu/>
            <LoginRegister/>
            
        </Fragment>
    );
};

export default Survey;