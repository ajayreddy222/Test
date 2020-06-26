import React, {Fragment} from 'react';
import Header from '../components/Header'
import LeadershipTeam from "../components/Leadership/Mark";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";

const Content = () => {
    return (
        <Fragment>
            <Header/>
            <LeadershipTeam
                name = "Dr. Mark Davis"
                desigination = "Executive Board"
                subDesigination = "Dean, College of Liberal Arts & Director, Office of International Programs at the University of West Alabama"
                city = "Montgomery, Alabama"
                expertise = "Areas of Expertise"
                skill = "International Programs, Education, Psychology"
                img = {require('../assets/img/MarkDavis.jpg')}
                bio = "Biography"
                text1 = "I believes in dynamic and active learning environments where students are able to experience the material in many different ways. Using multi modal presentations provides a complete sensory experience of the material. This style improves students’ retention and understanding, allowing them to process the information in abstract and applied ways. Adding problem-based exercises that require a combination of theoretical knowledge and practical application provides students with an opportunity to engage the information in an enriching manner."
                subHeading1 = "INTERNATIONAL PROGRAMS"
                text2 = "Set up 18 new partner universities from Australia, France, Switzerland, Japan, South Korea, Taiwan, England, and Germany."
                text3 = "Oversee international student recruitment"
                text4 = "Moved international student population from 3% to 8%."
                text5 = "Initiated formal exchange programs. Doubled the number of outgoing study abroad students over the last two years."
                subHeading2 = "PROFESSIONAL AND HONORARY AFFILIATIONS"
                text6 = "Society for the Psychological Study of Social Issues (SPSSI)"
                text7 = "Council of Colleges of Arts and Sciences (CCAS)"
                text8 = "Society for Personality and Social Psychology (SPSP)"
                text9 = "Council on Undergraduate Research (CUR)"
                text10 = "Psi Chi National Honor Society in Psychology, UWA Co-Chair"
                text11 = "Phi Kappa Phi National Honor Society, Past Southeast Regional Vice President"
            /> 
            <CallToAction/>
            <Footer/>
            <LoginRegister/>
        </Fragment>
    );
};

export default Content;