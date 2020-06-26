import React, {Fragment} from 'react';
import Header from '../components/Header'
import LeadershipTeam from "../components/Leadership";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";

const Content = () => {
    return (
        <Fragment>
            <Header/>
            <LeadershipTeam
                name = "Jennie Cochren"
                desigination = "Executive Board"
                subDesigination = "CEO, Sims Investments"
                city = "Montgomery, Alabama"
                expertise = "Areas of Expertise"
                skill = "Outreach, Marketing"
                img = {require('../assets/img/JennieCochren.jpg')}
                bio = "Biography"
                text1 = "Jennie Cochren is currently a Chief Executive Officer at Sims Investment, LLC. Sims Investment, LLC is a real estate Investment company that owns Stratford Square shopping center, restaurant and residential properties. She managed Ace bowling center and Ginza Japanese Korean Cuisine. Jennie also was an Executive Marketing Director for Sys-con, LLC from 2010. Sys-Con, LLC is a one of the largest Korean commercial & industrial construction company in River Region that was part of Hyundai Automobile manufacture construction and did a full project of Hyundai Heavy Industry manufacture and many more.Jennie and her children, Caroline and Christian moved to Montgomery in 2010."
            /> 
            <CallToAction/>
            <Footer/>
            <LoginRegister/>
        </Fragment>
    );
};

export default Content;