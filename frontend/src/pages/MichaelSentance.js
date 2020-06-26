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
                name = "Michael Sentance, JD"
                desigination = "The Chairman of the Executive Board of Directors of AKEEP"
                subDesigination = "The Alabama State Superintendent of Department of Education"
                city = "Montgomery, Alabama"
                expertise = "Term"
                skill = "2017"
                img = {require('../assets/img/michael-sentance.jpg')}
                bio = "Biography"
                text1 = "Mr. Sentance has played the most critical role in converting Korean/Foreign Teacher’s Certificate to Alabama’s Teacher Certificate especially for Math-STEM Teacher Recruitment via A-KEEP’s Program. Mr. Sentance has played the most critical role in converting Korean/Foreign Teacher’s Certificate to Alabama’s Teacher Certificate especially for Math-STEM Teacher Recruitment via A-KEEP’s Program. Mr. Michael Sentance currently serves as Alabama State Superintendent of Education. He is a graduate of Georgetown University, Duquesne University School of Law, and Boston University School of Law. He has a professional background that spans a variety of positions, including but not limited to, Assistant Attorney General; Director of the Governor’s Legislative Office; Undersecretary of Education; Secretary of Education; and Senior Education Advisor to the Governor – all in the Commonwealth of Massachusetts, a state that boasts one of the finest public educational systems in the country. In addition, Mr. Sentance has served as a regional representative with the United States Department of Education in Washington D.C., representing New England, and as a consultant on education policy and improvement. Outside of his career steeped in legislative affiliations, education policy and strategic education reform, Mr. Sentance enjoys horticultural gardening as well as reading and studying American history – particularly colonial era interests. He has said, “I’m fascinated by the people who were willing to put their lives on the line for an idea.” Mr. Sentance also enjoys the writings of Ernest Hemingway and F. Scott Fitzgerald. A huge sports fan, he played baseball in high school and soccer ﴾goalie﴿ in college. He still roots for his hometown Boston Red Sox, Celtics, and New England Patriots and continued to play softball well after his college days. Mr. Sentance and his wife, Mary Ann, have a son who works in sales for the Oracle Corporation in the U.S. and Canada, and a daughter who works with emotionally disturbed children in rural Massachusetts."
            /> 
            <CallToAction/>
            <Footer/>
            <LoginRegister/>
        </Fragment>
    );
};

export default Content;