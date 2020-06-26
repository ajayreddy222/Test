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
                name = "Dr. James Purcell"
                desigination = "Executive Board"
                subDesigination = "Executive Director, Alabama Commission on Higher Education"
                city = "Montgomery, Alabama"
                expertise = "Areas of Expertise"
                skill = "Education"
                img = {require('../assets/img/JamesPurcell.jpg')}
                bio = "Biography"
                text1 = "James E. Purcell, Ed.D., was named the State Higher Education Executive Officer (SHEEO) of the Alabama Commission on Higher Education in April, 2017, having served previously as the SHEEO in Rhode Island, Louisiana and Arkansas."
                text2 = "Dr. Purcell is a strong advocate for institutional research and planning as a means to implement policies and programs related to higher education. This organized approach provides a blueprint for expanding access to higher education and improving student attainment. The transparency across the higher education system will be essential in responding to workforce needs in Alabama. During his career, he has secured grant funding from state, federal and private philanthropic organizations to support these goals, particularly for adult degree completions."
                text3 = "Dr. Purcell is a past president of the Southern Association for Institutional Research and a former member of the executive council of SHEEO."
                text4 = "The Alabama native holds an Ed.D. in Higher Education Administration from the University of Alabama, a M.Ed. in Counseling from the University of Montevallo and a B.S. in Public Administration from Auburn University."
                text5 = "Dr. Purcell has spent the past thirty years advocating for students and institutions of higher education to maximize their potential."
            /> 
            <CallToAction/>
            <Footer/>
            <LoginRegister/>
        </Fragment>
    );
};

export default Content;