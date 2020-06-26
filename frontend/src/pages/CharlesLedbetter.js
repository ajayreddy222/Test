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
                name = "Dr. Charles Ledbetter"
                desigination = "Vice Chairman of the Board"
                subDesigination = "Pike Road Schools Superintendent"
                city = "Pike Road, Alabama"
                expertise = "Area of Expertise"
                skill = "Education"
                img = {require('../assets/img/Ledbetter.jpg')}
                bio = "Biography"
                text1 = "C. L. (Chuck) Ledbetter, Ed. D., superintendent of Pike Road City Schools since June 1, 2017, has been an educator for 28 years. A graduate of Auburn High School, he attended Furman University and played football for the Paladins as a freshman, then graduated from Auburn University with a B.A. in history.  Ledbetter taught high school history and government while also coaching football and basketball. He earned a master of education in history from Auburn-Montgomery and a doctor of education in educational leadership from Auburn University. He also successfully completed the University of Alabama Superintendent Academy."
                text2 = "As superintendent of Dublin, GA schools for over six years Ledbetter led the school system to great improvement. DCS successfully completed AdvancED accreditation review. Dublin High School increased its graduation rate from 59% to 94.1%. Standardized test scores increased in every school, and Dublin High School was recognized by US News and World Report as a Best High Schools Bronze Award winner for 2013 and 2015."
                text3 = "Ledbetter led a community discussion in Dothan about how schools can best serve the students and the city. Installation of STEM labs in middle schools and extended STEM hands-on learning in all schools were implemented, and the system successfully completed AdvancED accreditation review."
                text4 = "Chuck Ledbetter was a history teacher for 11 years, an assistant principal, a middle school principal, a high school principal, assistant superintendent for curriculum and for finance, and is in his ninth year as a superintendent. He served on the boards of the Council for Leaders of Alabama Schools, Georgia School Superintendents Association and the Georgia Charter Advisory Committee. Ledbetter serves as the second vice president for the Century Club 100, a group consisting of two superintendents from each state who discuss educational issues. He is married to Kim Ledbetter and has three daughters, two sons-in-law, and four grandchildren."
            /> 
            <CallToAction/>
            <Footer/>
            <LoginRegister/>
        </Fragment>
    );
};

export default Content;