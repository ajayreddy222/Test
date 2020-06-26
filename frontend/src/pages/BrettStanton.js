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
                name = "Brett Stanton"
                desigination = "Chairman of the Board"
                subDesigination = "Superintendent of Guntersville Schools"
                city = "Guntersville, Alabama"
                expertise = "Areas of Expertise"
                skill = "Education"
                img = {require('../assets/img/Brett.jpg')}
                bio = "Biography"
                text1 = "Before starting as the Superintendent of the Guntersville City Schools on February 4, 2015, Brett Stanton served as Superintendent of the Haralson County School System (Georgia) from July 1, 2008 – January 30, 2015. When asked what he enjoys about his job, he replied, “It’s a thrill to take on each day’s challenges and meaningfully contribute to the quality of the lives of our students, faculty, staff and community members.” In August 2012, Mr. Stanton was recognized with the distinction of being named First Runner-Up for the Superintendent of the Year Award by the National Association of School Superintendents. Under his guidance, the school system obtained Georgia’s highest level of accreditation by the AdvancED Southern Association of Colleges and Schools (SACS)/Schools Council on Accreditation and School Improvement (CASI) District Accreditation."
                text2 = "Mr. Stanton graduated from North Cobb High School in Acworth, GA where he was a four sport athlete participating in football, basketball, baseball and track. He received his Bachelor of Science Degree from South Carolina’s Newberry College on an academic and athletic (football) scholarship. He received two Master of Science in Education Degrees from Alabama’s Jacksonville State University. One of the Master Degrees came in history/education and the other in educational leadership. Mr. Stanton completed his Educational Specialist Degree in educational leadership at Jacksonville State University as well. He has continued to be a lifelong learner by completing a variety of selective professional development opportunities including, but not limited to the following: The Georgia School Superintendents Association (GSSA) Two-Year Superintendents Professional Development Program (SPDP)."
                text3 = "Mr. Stanton is married to the former Denise Dunn and they have three (daughters) including Katie, Mary Claire and Sadie."
            /> 
            <CallToAction/>
            <Footer/>
            <LoginRegister/>
        </Fragment>
    );
};

export default Content;