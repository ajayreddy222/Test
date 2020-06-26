import React, {Fragment} from 'react';


import Header from '../components/Header'
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";



import TextFormat from    "../components/ResourceTextformat";

import LanResource from "../components/LanResource";
import CritSch from "../components/CritScholarship";
import UsefulRead from "../components/UsefulRead";






const Resources = () => {
  
  
    return (

       <Fragment>
            
            <Header/>           

            <TextFormat
            title = "Resources"
            subtitle = "Follow the links to find resources to help your Korean language journey!"
            />

            <hr className="divider"/>

            <TextFormat
            title = "Language Learning"
            />
            
           
            <LanResource  
            Talktome = "https://talktomeinkorean.com/"
            Mango = "https://mangolanguages.com/index.html"    
            Duolingo = "https://www.duolingo.com/"   
            NineKorean = "https://www.90daykorean.com"
            Howto = "https://www.howtostudykorean.com"
            Keyto = "https://keytokorean.com/"
            KoreanKpop = "https://www.facebook.com/koreanthroughkpop/"
            Coursera = "https://www.coursera.org/learn/learn-korean/"
            Koreanone = "https://www.koreanclass101.com/?src=bc_LearnKorean1_Search_korean101_{creative}_{placement}&msclkid=c0b657b2b7e7103562be0c56e03d6dcc&utm_source=bing&utm_medium=cpc&utm_campaign=Korean-USA-S-Brand&utm_term=korean101&utm_content=Korean-Brand"
            LearnKorean = "http://www.learnkorean.com/"
            Wiseinit = "https://wiseinit.com/"
            Topik = "https://www.topikguide.com/complete-topik-practice-test-online/"            
            />
                                  
            <hr className="divider"/>


            <TextFormat
            title ="Critical Language Scholarship"
            contents =""
            />

            <CritSch
            NSLIfY = "https://www.nsliforyouth.org/"
            CLSP = "https://clscholarship.org/"
            KFS = "https://apply.kf.or.kr/selectNoticeAndApplicationList.nkf"
            AFS = "https://www.afsusa.org/study-abroad/scholarships/"
            />

            <hr className="divider"/>

            <TextFormat
            title ="Useful Reading"
            />

            <UsefulRead
            TwoFR = "https://cla.auburn.edu/forlang/resources/twenty-five-reasons/"
            KorTimes = "https://www.koreatimes.co.kr/www2/index.asp"
            LearnForeign = "https://www.mtpr.org/post/importance-learning-foreign-languages"
            KorExpose = "https://www.koreaexpose.com/"
            />


            <hr className="divider"/>


        
         
       




 
        <CallToAction/>
        <Footer/> 
        <MobileMenu/>

            
        </Fragment>
    );
};

export default Resources;