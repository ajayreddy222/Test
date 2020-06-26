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
                name = "Dr. Deborah E. Barnhart"
                desigination = "Emeritus Board"
                subDesigination = "CEO and Executive Director, U.S. Space and Rocket Center"
                city = "Huntsville, Alabama"
                expertise = "Term"
                skill = "Executive Board of Directors 2012 - 2017"
                img = {require('../assets/img/Deborah-e-barnhart.jpg')}
                bio = "Biography"
                text1 = "Dr. Barnhart became the Chief Executive Officer and Executive Director of the U.S. Space & Rocket Center in December 2010.  The Center is the official Visitor Center for NASA’s Marshall Space Flight Center, an affiliate of the Smithsonian, and the showcase for Redstone Arsenal and defense programs, including energy.  Home to the world renowned U.S. Space Camp®, U.S. Space Academy®, Aviation Challenge®, and Robotics Camp, the Center is Alabama’s leading tourist attraction.  Leading technology initiatives in aerospace and defense are showcased along with international space artifacts including the world’s only complete full‐scale Space Shuttle stack and the National Historic Landmark Apollo Saturn V moon rocket. Dr. Barnhart’s career spans three decades of service in commercial industry, government, aerospace and defense.  A retired Navy Captain (0‐6), she was one of the first ten women assigned to duty aboard ships and commanded five units in her 26 year career.    She was Vice President of three Dow 30 aerospace and defense companies, serving in manufacturing,   business development, program and research management, and congressional lobbying for Honeywell International, McDonnell Douglas (now Boeing), and United Technologies Aerospace. Dr. Barnhart was recently appointed to the Smithsonian Affiliations Advisory Council. She is a recipient of NASA’s Distinguished Public Service Medal, the highest form of recognition awarded by NASA to a non‐government individual.  She is a member of the Board of Managers of the Air Force Museum Foundation and Trustee on the Board of the University of Alabama in Huntsville Foundation.  She currently serves as Governor Robert Bentley’s appointee to the Alabama Space Authority Task Force. Dr. Barnhart earned her doctorate at Vanderbilt University, holds degrees from the University of Maryland, the University of Alabama Huntsville, and Massachusetts Institute of Technology where she was a Sloan Fellow.  She resides in Huntsville, Alabama and Clearwater Beach, Florida."
            /> 
            <CallToAction/>
            <Footer/>
            <LoginRegister/>
        </Fragment>
    );
};

export default Content;