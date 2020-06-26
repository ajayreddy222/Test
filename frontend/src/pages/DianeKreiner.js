import React, {Fragment} from 'react';
import Header from '../components/Header'
import LeadershipTeam from "../components/Staff";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";

const Content = () => {
    return (
        <Fragment>
            <Header/>
            <LeadershipTeam
                name = "Diane M. Kreiner"
                desigination = "AmeriCorps VISTA Program Evaluator, IT Consultant"
                city = "Montgomery, Alabama"
                contact = "Connect with Diane"
                phoneNo = "334-625-8515"
                email = "diane.kreiner@akeep.org"
                expertise = "Areas of Expertise"
                skill = "Data Analytics Specialist, IT Network Consulting"
                img = {require('../assets/img/Diane.jpg')}
                bio = "Biography"
                text1 = "Diane Kreiner is the Program Evaluator and IT Consultant at A-KEEP."
                text2 = "Diane is a retired 29-year veteran engineering and project management professional with data analytics experience within the civil construction, outside plant and network equipment disciplines. She organized and implemented large scale projects with multi-million-dollar budgets, achieving top quality, maximizing time efficiency and high profitability. She is an outstanding hands-on leader who motivates, trains, and provides guidance to clients, cross-functional work groups and team members to exceed key performance indicators within the organization. Diane has carried these same proven hard skills to the body of work she has implemented in the volunteer community."
                text3 = "Diane served as a volunteer for Polk County Florida Community Schools, serving as the parent representative on the Student Advisory Council  for Boone Middle School, a steering committee for middle school youth education, and served with teachers to provide direction for curriculum and student activities, also serving on the Principal Selection Committee.   She served as a 'Volunteer for Literacy' for Eastside Elementary School, working with students having difficulty passing the yearly state FCAT test and provided additional one on one tutoring as needed to assist individual students in achieving success. Diane served as a mentor for Verizon Wireless in the science and technology field, implementing a director's initiative for the advancement of women in Information Technology, where she also coached three women to make a successful entry into technology roles based on their untapped potential, free of gender bias."
                text4 = "Diane previously served in Phoenix Arizona as an AmeriCorps VISTA volunteer for Maricopa Integrated Health Systems – Maternal and Child – First Things First Program - as a data analytics specialist. She provided data compilation, reporting, database implementation and training to First Things First staff.  She tracked standards of practice including writing policies and procedures in addition to planning/conducting training and assisted with current grant-funded activities and FY19 grant applications. Diane provided outreach to the Phoenix Arizona community and key stakeholders for the four MIHS Family Learning Centers."
            /> 
            <CallToAction/>
            <Footer/>
            <LoginRegister/>
        </Fragment>
    );
};

export default Content;