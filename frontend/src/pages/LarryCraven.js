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
                name = "Larry Craven, JD"
                desigination = "The Founding Chairman for AKEEP"
                subDesigination = "2011 Interim State Superintendent of ALSDE"
                city = "Montgomery, Alabama"
                expertise = "Term"
                skill = "2011"
                img = {require('../assets/img/larry-craven.jpg')}
                bio = "Biography"
                text1 = "Mr. Craven signed the inaugural Memorandum of Understanding with Gyeongbuk Provincial Department of Education in South Korea, October 2011. With the MOU, reciprocal Global Youth Leadership Programs are born between Alabama and Korea. The first Alabama delegation was sent to Hwarang Leadership Training Institution July 2012. Mr. Craven also served as the General Counsel for the Alabama State Department of Education and as Assistant Attorney General. The Office of General CLarryounsel represents the State Superintendent, the State Board of Education and its members, and the Department of Education and its staff elements. He has served as legal counsel to the Department of Education for 14 years. Mr. Craven earned his J.D. from Cumberland Law School at Samford University in 1977. He served as an Assistant District Attorney for Montgomery, Alabama from 1979 until 1981. He previously served as Staff Judge Advocate for the Alabama National Guard until his retirement as Colonel from active military service in 1997. He is a former helicopter pilot having served as a Standardization Instructor Pilot for the 101st Airborne Division in Vietnam from 1970-1971. His wife Ms. Shiela Craven also served as the first AKEEP Program Coordinator."
            /> 
            <CallToAction/>
            <Footer/>
            <LoginRegister/>
        </Fragment>
    );
};

export default Content;