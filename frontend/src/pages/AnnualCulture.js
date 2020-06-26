import React, {Fragment} from 'react';
import Header from '../components/Header'
import LeadershipTeam from "../components/Leadership";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";

const AnnualCultureExperience = () => {
    return (

<div className ="col">

    <Header/>

    <div className = "container"style ={{ textalign: "center", marginTop :"100px"}} >

    <img  src={require('../assets/img/events/twobrothers.png')}  />
            
            
            <div>

                <div className = "container"style ={{ width: "80%",marginTop : "50px",margin :"75px" }} >

                <h3>More Info Coming Soon!</h3>
                <p>This page is currently being developed, but you can still access information and resources related to our 2020 Challenge America production of “A Tale of Two Brothers” here. Thank you for your patience!</p>
               </div>
               <button type="button" style={{ backgroundColor: 'red', padding: '20px', color: 'white' }}><a href="no" style={{ color: 'white' }} >"SPOON DANCE" SONG</a></button> <br /> <br />
               <button type="button" style={{ backgroundColor: 'red', padding: '20px' }}><a href="files.constantcontact.com/62a8f1e5701/3adb1700-8a7d-4dfa-bc9f-ab3bc041ab01.pdf" style={{ color: 'white' }} >"A TALE OF TWO BROTHERS" SCRIPT"</a></button> <br /> <br />

            
            </div>
            </div>



        <CallToAction/>
       <Footer/>
       </div>



    );
};

export default AnnualCultureExperience;