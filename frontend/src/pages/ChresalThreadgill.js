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
                subDesigination = "Mobile City Schools Superintendent"
                city = "Mobile, Alabama"
                expertise = "Areas of Expertise"
                skill = "Education"
                img = {require('../assets/img/ChresalThreadgill.jpg')}
                bio = "Biography"
                text1 = "Ensuring that Mobile County Public School’s 59,000 students are receiving the best education possible starts with us in governance and leadership."
                text2 = "The school system operates under the leadership of Superintendent Chresal D. Threadgill, a native of Mobile, AL and graduate of John L. LeFlore High School."
                text3 = "The superintendent is appointed by the five-member Mobile County Board of School Commissioners. The members are: District I - L. Douglas Harwell Jr.; District II - Don Stringfellow; District III - Dr. Reginald Crenshaw; District IV - Robert E. Battles; and District V -  Dr. William Foster. Board members are elected to six-year terms to represent the people in their districts."
                text4 = "Together, we work to carry out our mission to graduate prepared and productive citizens. And we strive to reach our district’s vision of becoming a premier educational system where all students engage in multiple pathways leading to success in a global society."
            /> 
            <CallToAction/>
            <Footer/>
            <LoginRegister/>
        </Fragment>
    );
};

export default Content;