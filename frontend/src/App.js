import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Security } from '@okta/okta-react';

/*
* @ All pages Import
*/
// import Demo from './pages/Demo'
import OurWork from './pages/OurWork'
import HomeOne from './pages/HomeOne'
import HomeTwo from './pages/HomeTwo'
import Service from './pages/OurService'
import ServiceDetails from "./pages/ServiceDetails";
import BlogGridRightSidebar from './pages/BlogGridRightSidebar';
import BlogGridLeftSidebar from './pages/BlogGridLeftSidebar';
import BlogListLeftSidebar from './pages/BlogListLeftSidebar';
import BlogListRightSidebar from './pages/BlogListRightSidebar';
import BlogDetailsPage from "./pages/BlogDetails";
import Team from "./pages/Team";
import TeamDetails from "./pages/TeamDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error404 from "./pages/Error404";
import ScrollToTop from "./helpers/ScrollToTop";
import OurStory from "./pages/OurStory";
import OurMission from './pages/OurMission';
import OurHistory from './pages/OurHistory';
import OurPeople from './pages/OurPeople';
import MeesoonHan from './pages/MeesoonHan';
import EricMackey from './pages/EricMackey';
import CharlesLedbetter from './pages/CharlesLedbetter';
import AndreCarter from './pages/AndreCarter';
import BrittanyPayne from './pages/BrittanyPayne';
import ChristaSprings from './pages/ChristaSprings';
import DianeKreiner from './pages/DianeKreiner';
import GiryongPark from './pages/GiryongPark';
import JunhyupLee from './pages/JunhyupLee';
import NethraParam from './pages/NethraParam';
import TikiArmstong from './pages/TikiArmstong';
import ToyaCarter from './pages/ToyaCarter';
import LuvJunious from './pages/LuvJunious';
import FayePark from './pages/FayePark';
import AaronMilner from './pages/AaronMilner';
import BrettStanton from './pages/BrettStanton';
import ChresalThreadgill from './pages/ChresalThreadgill';
import ChristenStewart from './pages/ChristenStewart';
import JamesPurcell from './pages/JamesPurcell';
import JoeWindle from './pages/JoeWindle';
import JennieCochren from './pages/JennieCochren';
import LanceHunter from './pages/LanceHunter';
import MarkDavis from './pages/MarkDavis';
import NichelleNix from './pages/NichelleNix';
import DeboraheBarnhart from './pages/DeboraheBarnhart';
import GeraldDial from './pages/GeraldDial';
import JohngVeres from './pages/JohngVeres';
import LarryCraven from './pages/LarryCraven';
import MichaelSentance from './pages/MichaelSentance';
import PhilipCleveland from './pages/PhilipCleveland';
import RayWhite from './pages/RayWhite';
import ThomasBice from './pages/ThomasBice';
import TheNeed from './pages/TheNeed';
import OurApproach from './pages/OurApproach';
import OurPrograms from './pages/OurPrograms';
import Volunteer from './pages/Volunteer';
import Teach from './pages/Teach';
import Partner from './pages/Partner';
import Survey from './pages/Survey';
import Covid19Resources from './pages/Covid19Resources';
import Culture from './pages/Culture'
import Press from './pages/Press'
import GetInvolved from './pages/GetInvolved';
import AfterSchool from './pages/AfterSchool';
import Event from './pages/Events';
import CatchTheKWave from './pages/CatchPage';
import Community from './pages/Community';
import OnlineKSL from './pages/OnlineKSLClass';
import AnnualKoreanCulturalExperience from './pages/AnnualCulture';
import Resources from './pages/Resources'
import Fileupload from './pages/Fileupload'

 
const routePath = (path) => (
    `${process.env.PUBLIC_URL + path}`
);

const App = () => {
    return (
        <Router>
            <ScrollToTop>
                <Switch>
                    {/* HOME */}
                    <Route exact path={routePath('/')}                  component={HomeOne}/>
                    {/* <Route exact path={routePath('/home-one')}          component={HomeOne}/> */}
                    <Route exact path={routePath('/home-two')}          component={HomeTwo}/>


                    {/* ABOUT A-KEEP */}
                    <Route exact path={routePath("/about")}                 component={About}/>
                    <Route exact path={routePath("/contact")}               component={Contact}/>
                    <Route exact path={routePath('/our-story')}             component={OurStory}/>
                    <Route exact path={routePath('/our-mission')}           component={OurMission}/>
                    <Route exact path={routePath('/our-history')}           component={OurHistory}/>
                    <Route exact path={routePath('/our-people')}            component={OurPeople}/>
                    <Route exact path={routePath("/contact")}               component={Contact}/>
                    
                    {/* OUR-PEOPLE  */}
                    <Route exact path={routePath("/meesoon-han")}           component={MeesoonHan}/>
                    <Route exact path={routePath("/eric-mackey")}           component={EricMackey}/>
                    <Route exact path={routePath("/charles-ledbetter")}     component={CharlesLedbetter}/>
                    <Route exact path={routePath("/andre-carter")}          component={AndreCarter}/>
                    <Route exact path={routePath("/brittany-payne")}        component={BrittanyPayne}/>
                    <Route exact path={routePath("/christa-springs")}       component={ChristaSprings}/>
                    <Route exact path={routePath("/diane-kreiner")}         component={DianeKreiner}/>
                    <Route exact path={routePath("/giryong-park")}          component={GiryongPark}/>
                    <Route exact path={routePath("/junhyup-lee")}           component={JunhyupLee}/>
                    <Route exact path={routePath("/nethra-param")}          component={NethraParam}/>
                    <Route exact path={routePath("/tiki-armstong")}         component={TikiArmstong}/>
                    <Route exact path={routePath("/toya-carter")}           component={ToyaCarter}/>
                    <Route exact path={routePath("/luv-junious")}           component={LuvJunious}/>
                    <Route exact path={routePath("/faye-park")}             component={FayePark}/>
                    <Route exact path={routePath("/aaron-milner")}          component={AaronMilner}/>
                    <Route exact path={routePath("/brett-stanton")}         component={BrettStanton}/>
                    <Route exact path={routePath("/chresal-threadgill")}    component={ChresalThreadgill}/>
                    <Route exact path={routePath("/christen-stewart")}      component={ChristenStewart}/>
                    <Route exact path={routePath("/james-purcell")}         component={JamesPurcell}/>
                    <Route exact path={routePath("/joe-windle")}            component={JoeWindle}/>
                    <Route exact path={routePath("/jennie-cochren")}        component={JennieCochren}/>
                    <Route exact path={routePath("/lance-hunter")}          component={LanceHunter}/>
                    <Route exact path={routePath("/mark-davis")}            component={MarkDavis}/>
                    <Route exact path={routePath("/nichelle-nix")}          component={NichelleNix}/>
                    <Route exact path={routePath("/deborah-e-barnhart")}    component={DeboraheBarnhart}/>
                    <Route exact path={routePath("/gerald-dial")}           component={GeraldDial}/>
                    <Route exact path={routePath("/john-g-veres")}          component={JohngVeres}/>
                    <Route exact path={routePath("/larry-craven")}          component={LarryCraven}/>
                    <Route exact path={routePath("/michael-sentance")}      component={MichaelSentance}/>
                    <Route exact path={routePath("/philip-cleveland")}      component={PhilipCleveland}/>
                    <Route exact path={routePath("/ray-white")}             component={RayWhite}/>
                    <Route exact path={routePath("/thomas-bice")}           component={ThomasBice}/>
                    

                    {/* WHAT WE DO */}
                    <Route exact path={routePath('/our-work')}           component ={OurWork}/>
                    <Route exact path={routePath('/the-need')}          component={TheNeed}/>
                    <Route exact path={routePath('/our-approach')}      component={OurApproach}/>
                    <Route exact path={routePath('/our-programs')}      component={OurPrograms}/>
                    <Route exact path={routePath('/ourservices')}       component={Service}/>
                    <Route       path={routePath('/service/:serviceID')}    component={ServiceDetails}/>
                    <Route exact path={routePath('/after-school')}      component={AfterSchool}/>


                    {/* GET INVOLVED */}
                    <Route exact path={routePath('/get-involved')}      component={GetInvolved}/>
                    <Route exact path={routePath('/volunteer')}         component={Volunteer}/>
                    <Route exact path={routePath('/teach-with-us')}     component={Teach}/>
                    <Route exact path={routePath('/partner-with-us')}   component={Partner}/>
                    <Route exact path={routePath('/survey')}            component={Survey}/>


                    {/* INSIGHTS */}
                    <Route exact path={routePath('/Covid19Resources')}  component={Covid19Resources}/>
                    <Route exact path={routePath('/culture')}           component={Culture}/>                    
                    <Route exact path={routePath('/Press')}             component={Press}/>
                    <Route exact path={routePath('/Events')}             component={Event}/>
                    <Route exact path={routePath('/Resources')}             component={Resources}/>



                    {/* OTHER? */}
                    <Route       path={routePath("/blog/:blogID")}      component={BlogDetailsPage}/>
                    <Route exact path={routePath("/team")}              component={Team}/>
                    <Route       path={routePath("/team-member/:teamID")}   component={TeamDetails}/>
                   
                   {/* Inside of Online program Wave */}
                    <Route       path={routePath("/CatchTheKWave")}   component={CatchTheKWave}/>
                    <Route       path={routePath("/Community")}   component={Community}/>
                    <Route       path={routePath("/OnlineKSL")}   component={OnlineKSL}/>
                    <Route       path = {routePath("/TheKoreanCulturalExperience")} component = {AnnualKoreanCulturalExperience}/>

                    {/* THESE CAME FROM THE TEMPLATE */}
                    <Route exact path={`${process.env.PUBLIC_URL + "/blog-grid-right-sidebar"}`}
                        component={BlogGridRightSidebar} />
                    <Route exact path={`${process.env.PUBLIC_URL + "/blog-grid-left-sidebar"}`}
                        component={BlogGridLeftSidebar} />
                    {/* <Route exact path={`${process.env.PUBLIC_URL + "/blog-grid-without-sidebar"}`}
                        component={BlogGridWithoutSidebar} /> */}
                    <Route exact path={`${process.env.PUBLIC_URL + "/blog-list-left-sidebar"}`}
                        component={BlogListLeftSidebar} />
                    <Route exact path={`${process.env.PUBLIC_URL + "/blog-list-right-sidebar"}`}
                           component={BlogListRightSidebar}/>


<Route       path = {routePath("/Fileupload")} component = {Fileupload}/>

                    {/* /!\ ERROR /!\ */}
                    <Route exact component={Error404}/>
                </Switch>
            </ScrollToTop>
        </Router>
    );
};

export default App;