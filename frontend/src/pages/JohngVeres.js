import React, {Fragment} from 'react';
import Header from '../components/Header'
import LeadershipTeam from "../components//Leadership/Emeritus";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";

const Content = () => {
    return (
        <Fragment>
            <Header/>
            <LeadershipTeam
                name = "Dr. John G. Veres, III"
                desigination = "Executive Board of Directors"
                subDesigination = "Chancellor Auburn University Montgomery"
                city = "Montgomery, Alabama"
                expertise = "Term"
                skill = "2014-2017"
                img = {require('../assets/img/john-g-veres.jpg')}
                bio = "Biography"
                text1 = "John G. Veres III, Chancellor of Auburn University at Montgomery, is a life-long resident of Alabama. He received a Ph.D. in Industrial/Organizational Psychology from Auburn University in 1983 and has over 35 years' experience as an organizational consultant. He has published 50 articles and book chapters, two edited volumes and one book on human resources management topics. He has consulted in over 80 employment discrimination lawsuits on issues of adverse impact and test validation, and serves as Special Master for the United States District Court for the Northern District of Alabama. John currently serves on the boards of the Alabama-Korea Education and Economic Partnership, the Alabama World Affairs Council, AUM Confucius Institute, Auburn University Foundation, Committee of 100, Helicity and Montgomery Area Chamber of Commerce, and recently served on the Alabama Governor’s College and Career Ready Task Force. In 2011, he received the H. Roe Bartle Presidential Leadership Award from the Nonprofit Leadership Alliance. John and his wife of 38 years, Beth Sullivan Veres, have three children and two grandchildren."
                bio1 = "Publications"
                link1 = "http://www.wsfa.com/story/29902707/aum-chancellor-veres-announces-retirement/"
                lText1 = "AUM Chancellor Veres announces retirement"
                text2 = "- WSFA"
            /> 
            <CallToAction/>
            <Footer/>
            <LoginRegister/>
        </Fragment>
    );
};

export default Content;