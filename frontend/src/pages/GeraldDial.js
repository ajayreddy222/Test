import React, {Fragment} from 'react';
import Header from '../components/Header'
import LeadershipTeam from "../components/Leadership/Emeritus";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";

const Content = () => {
    return (
        <Fragment>
            <Header/>
            <LeadershipTeam
                name = "Honorable Gerald Dial"
                desigination = "Co-Founder of A-KEEP & the Inaugural Executive Board of Directors of A-KEEP"
                subDesigination = "The Honorable Alabama State Senator"
                city = "Montgomery, Alabama"
                expertise = "Term"
                skill = "2011-2016"
                img = {require('../assets/img/gerald-dial.jpg')}
                bio = "Biography"
                text1 = "Honorable Senator Dial has played the most critical role in establishing A-KEEP from connecting the Gyeongbuk Provincial Department of Education to the Alabama State Department of Education, establishing the inaugural Board of Directors, and fundraising to send the very first Alabama Youth Delegation, 2012. He is a Co-Founder of A-KEEP. Senator Dial, born in Delta, Alabama, is serving his ninth term in the Legislature, having served two terms in the House and six previous terms in the Senate. He holds degrees from both Livingston State and Jacksonville State Universities, and has done graduate work at Auburn University. Senator Dial, a self-employed real estate developer, and his wife, Faye, are the parents of two children: Melanie and Jason. He is a Baptist, a Republican, a Brigadier General (Retired) in the Alabama National Guard, President Pro Tempore of the Troy University Board of Trustees, and belongs to several sports-oriented organizations. He lists his hobbies as hunting, fishing, and work. On January 18, 2011, Senator Dial was appointed Majority Whip by the Senate Majority Leader."
            /> 
            <CallToAction/>
            <Footer/>
            <LoginRegister/>
        </Fragment>
    );
};

export default Content;