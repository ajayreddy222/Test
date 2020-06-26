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
                name = "Dr. Chresal Threadgill"
                desigination = "Executive Board"
                subDesigination = "Auburn City Schools Superintendent"
                city = "Auburn, Alabama"
                expertise = "Areas of Expertise"
                skill = "Education"
                img = {require('../assets/img/Cristen.jpg')}
                bio = "Biography"
                text1 = "Dr. Herring has been employed by ACS since 1993 and has served in a number of roles including classroom teacher, System Reading Specialist, as well as Principal of both Auburn Early Education Center and Ogletree Elementary before serving as the Director of Elementary Curriculum and most recently as Assistant Superintendent."
                text2 = "She holds a Bachelor’s and Master’s Degree in Elementary Education, her administrative certification in Education Administration and her Doctorate in Educational Foundations, Technology and Leadership, all from Auburn University. Dr. Herring also completed the Alabama Superintendent’s Academy in 2010."
            /> 
            <CallToAction/>
            <Footer/>
            <LoginRegister/>
        </Fragment>
    );
};

export default Content;