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
                name = "Lance Hunter"
                desigination = "Executive Board"
                subDesigination = "CEO, Hodges Warehouse + Logistics"
                city = "Montgomery, Alabama"
                expertise = "Areas of Expertise"
                skill = "Corporate Business, Logistics"
                img = {require('../assets/img/LanceHunter.jpg')}
                bio = "Biography"
                text1 = "Lance Hunter has helped lead the Hodges Companies for over 16 years, the last 14 as CEO. He has more than 35 year’s management experience in diverse industries including warehousing, logistics, real estate, financial services and consulting. He is a former CPA and a received a MBA from the Harvard Business School. He is a leader in diversifying Global Business and strengthening Asian Corporate relations in Alabama, thus has become an influential leader in the communities in large. In addition to serving as an Executive Board of Directors of AKEEP, he also services in following additional Civic and Business Boards: Board of Directors, Montgomery Area Chamber of Commerce Advisor to Finance Committee, River Region United Way Board of Control, Committee of 100 Montgomery Alabama Board of Directors, Goodwill of Central Alabama   ke Road School."
            /> 
            <CallToAction/>
            <Footer/>
            <LoginRegister/>
        </Fragment>
    );
};

export default Content;