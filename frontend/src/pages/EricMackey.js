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
                name = "Dr. Eric Mackey"
                desigination = "Chairman of the Board"
                subDesigination = "Superintendent of Alabama State Department of Education"
                city = "Montgomery, Alabama"
                expertise = "Area of Expertise"
                skill = "Education"
                img = {require('../assets/img/EricMackey.jpg')}
                bio = "Biography"
                text1 = "Dr. Eric Mackey currently serves as the Executive Director of the School Superintendents of Alabama, the state’s professional association for school system executives and their leadership teams. SSA provides high quality professional learning, opportunities for networking and sharing of ideas, and public school advocacy for school system leaders. It is also a leader in school policy development and partners with other organizations seeking better schools and greater opportunities for students in every community across Alabama."
                text2 = "Prior to joining SSA in July 2010, he served for 8 years as superintendent of schools in Jacksonville, Alabama. A career educator, he taught high school and middle school sciences before entering school leadership as an assistant principal and then principal. He holds a bachelor’s degree from Jacksonville State University and Master’s, Specialist, and Doctoral degrees from the University of Alabama."
                text3 = "Throughout his career, Dr. Mackey has been an advocate for increased rigor and advanced high school courses as well as challenging elementary and middle school courses that prepare students for more challenging high school work. He believes that schools must transform from an industrial model to one more attuned to the information age – one that is both challenging and highly interesting for students."
                text4 = "Eric is also engaged in his community.  Among his many civic commitments, he serves on the Executive Committee of the Tukabatchee Area Council, BSA, and is an active leader in Montgomery’s Troop 8 with his sons. He is a Board member with the Montgomery Rotary Club and teaches high school youth at Woodland United Methodist Church."
                text5 = "He and his wife, Robin, have three boys, John (21), Brandon (18), and Christopher (13). John is a senior at Jacksonville State; Brandon is a senior at LAMP High School in Montgomery; and Christopher is a seventh grader at Pike Road School."
            /> 
            <CallToAction/>
            <Footer/>
            <LoginRegister/>
        </Fragment>
    );
};

export default Content;