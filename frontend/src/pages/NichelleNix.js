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
                name = "Nichelle Nix, JD"
                desigination = "Executive Board"
                subDesigination = "Director, Governor’s Office of Minority Affairs"
                city = "Montgomery, Alabama"
                expertise = "Areas of Expertise"
                skill = "Policy, Economic Development, Governmental and Regulatory Affairs"
                img = {require('../assets/img/Nichelle.jpg')}
                bio = "Biography"
                text1 = "Director Nix was appointed by Gov. Robert Bentley on March 9, 2016, when the Governor’s Office of Minority Affairs was created by Executive Order No. 15. She was sworn in as a member of the cabinet when the Governor signed legislation establishing the Governor’s Office of Minority Affairs and the position of director as cabinet level on May 24, 2016."
                text2 = "In this role, Director Nix is responsible for advising the governor on issues affecting minorities, including women, focusing on the improvement of the overall quality of life of minorities, specifically in the areas of education, health, housing, employment, civil rights, criminal justice, and empowerment."
                text3 = "Before joining the governor’s administration, Nix was an attorney at Maynard, Cooper & Gale, P.C., in Birmingham and was a member of the firm’s governmental and regulatory affairs practice group. Prior to Maynard Cooper, Nix served as executive director of the Sickle Cell Disease Association of America in Mobile, where she oversaw the association’s operations across nine counties of southwest Alabama. While there, Nix worked to increase awareness of sickle cell disease and enhance the quality of life of those battling the disease."
                text4 = "Nix has also served as legislative counsel to U.S. Rep. Artur Davis, D-Birmingham, in Washington, D.C., and as a Healthcare Fellow at the Alabama Appleseed Center for Law & Justice in Montgomery."
                text5 = "Nix is a graduate of Spelman College in Atlanta, where she received a Bachelor of Art’s degree in political science. She earned a Master’s of Public Health degree from Emory University, and a Juris Doctorate from The University of Alabama School of Law."
                text6 = "Nix is an active member of the Junior League of Birmingham, the Rotary Club of Mobile, and the Birmingham Bar Association. She has a passion for health, education, and helping those in need. Nix serves as a member of several boards, including The 7th Project and Camp Smile-A-Mile, and enjoys exploring the food scene in Birmingham with her husband, Leroy Nix."
            /> 
            <CallToAction/>
            <Footer/>
            <LoginRegister/>
        </Fragment>
    );
};

export default Content;