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
                name = "Dr. Thomas Bice"
                desigination = "The Inaugural Chairman of the Executive Board of Directors"
                subDesigination = "The Alabama State Superintendent of Department of Education (ALSDE), 2012 - 2016 (Retired)"
                city = "Montgomery, Alabama"
                expertise = "Term"
                skill = "2012-2016"
                img = {require('../assets/img/thomas-bice.jpg')}
                bio = "Biography"
                text1 = "As the first Chairman of the Board and the State Superintendent of Education, he adopted Korean as a Second Language for Alabama’s Public Education, established Korean Curriculums for K – 12, and pushed out to the local school districts. He also established credentials for Korean Language Teachers and teaching diverse cultural education in Alabama Public Schools. Dr. Tommy Bice was appointed Alabama's State Superintendent of Education on November 10, 2011, and assumed the position on January 1, 2012. Prior to his appointment, Dr. Bice was Alabama's Deputy State Superintendent of Education for Instructional Services; Superintendent of the Alexander City School System, high school principal, career tech director, alternative school teacher/director, special education/residential school director, early childhood t eacher/parent trainer; and began his career as a teacher at the Alabama Institute f or the Deaf and Blind. Dr. Bice also serves as an adjunct professor of Educational Leadership at Auburn University. He received his B.S. and Ed.D. degrees from Auburn University and his M.S. degree from the University of Alabama in Birmingham. Dr. Bice resides in Alexander City with his wife, Nancy, and their three sons, Andrew, Bennett, and Cambron."
            /> 
            <CallToAction/>
            <Footer/>
            <LoginRegister/>
        </Fragment>
    );
};

export default Content;