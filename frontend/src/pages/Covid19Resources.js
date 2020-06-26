import React, {Fragment} from 'react';
import Header from '../components/Header'
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import TextFormat from    "../components/Textformat";
import Youtube from "../components/Youtube";
import LeftpictureText from "../components/Leftpictext";
import Multiplebuttonlink from "../components/Multiplebuttonlink";
import Newslider from "../components/NewSlider";

const Covid19Resources = () => {
    return (
       <Fragment>
           <Header/>
           <PageHeader
            bgImg={require('../assets/img/Corona.jpeg')}
            title="NOVEL CORONAVIRUS (COVID-19) RESOURCES"
            />
            <TextFormat
            title = "A-KEEP Program Updates"
            subtitle = ""
            contents = "In light of the COVID-19 pandemic, the following programs have been cancelled or postponed in order to continually place our community’s safety as a priority. If you have any questions about the current state of our programs, please contact us and we will answer your inquiries as soon as possible."
            />
            <TextFormat
            subtitle = "- STARTALK Summer Camp 2020            "
            contents = "We are sorry to inform you that the NSA has suspended the entire 2020 Summer Program. While there will be no camp this year, we will certainly apply for a grant in order to host the camp next year, or as soon as it is safe to do so. A-KEEP is now focusing the summer's efforts on providing credited Korean courses to students in the future."
            />        
            <TextFormat
            subtitle = "- Korean Cultural Experience 2020            "
            contents = "A-KEEP's Annual Korean Cultural Experience performance, which was set to take place on May 30 this year, has officially been postponed in light of the current coronavirus pandemic. A-KEEP is currently working with its stakeholders on future dates and additional guidance around next steps."
            />
            <TextFormat
            title = "New Programs "
            contents = "   As old programs take on new forms, so are New Programs being born! We’re excited to share with you the newest programs and ventures A-KEEP is currently producing to continue educational growth and multicultural understanding through online and distance learning."
            /> 
            <TextFormat
            subtitle = "MGM Catch the K-WAVE Online!"
            contents = "  Catch the K-WAVE theme from our STARTALK program is making it’s TV debut! This summer, A-KEEP is working with Montgomery Public Schools and the Montgomery Capital City Connection to record and broadcast Korean language & culture educational lessons free to our communities on channels Charter-Spectrum channel 181 and WOW channel 96. Please check back for more developing information and send us any questions."
            /> 
            <TextFormat
            subtitle = "Korean Cultural Experience - Online Rehearsals"
            contents = "As aforementioned, the annual Korean Cultural Experience performance has been postponed. However, cast members and staff are still working diligently to hold online rehearsals with all members. These rehearsals are essential for many of our novice cast members to continue learning about theater arts from experienced director Angela Dickson, and for all members to practice and learn traditional Korean arts from celebrated dancer and instructor, Hyunju Shim"
            /> 
            <TextFormat
            title =""
            contents =""
            />   
            <Youtube
            title = "A Message from A-KEEP"
            contents = "We would like to share a message on the impact of social stigma and prejudice libeled towards our community members in the wake of the COVID-19 outbreak. As a center for multicultural education, we would like to speak for our community in taking a stance against divisiveness and, instead, collaborating to provide share information on how to protect ourselves and families."
           />
            <TextFormat
            title =""
            contents =""
            />
            <LeftpictureText
            subtitle = "    Official Statement"
            pic ={require('../assets/img/corona_statement.jpg')}
            contents = "As a community service organization, your safety is our top priority. Therefore, all reasonable care has been taken to address the concerns of the community at large and those parents, students and community members who will attend our programs in a traditional manner after the State of Emergency is lifted.  "
            btnlink = "https://static1.squarespace.com/static/5bae2d19ebfc7ffd793f1b8b/t/5e7e6f063ae6d4439b83bada/1585344263664/AKEEP+Statement+on+COVID-19.pdf"/>
            <Multiplebuttonlink
            subtitle = "Quick Resource"
            pic = {require('../assets/img/coronaVirus.jpg')}
            contents = "Centers for Disease Control and Prevention "
            corona19link = "cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html?CDC_AA_refVal=https%3A%2F%2Fwww.cdc.gov%2Fcoronavirus%2F2019-ncov%2Fprepare%2Fprevention.html" 
            resourcelink
            = "https://www.cdc.gov/coronavirus/2019-ncov/community/index.html"
            printresourcelink
            = "https://www.cdc.gov/coronavirus/2019-ncov/communication/print-resources.html?CDC_AA_refVal=https%3A%2F%2Fwww.cdc.gov%2Fcoronavirus%2F2019-ncov%2Fcommunication%2Ffactsheets.html"
            contents1
            = "World Health Organization"
            advicelink
            = "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public"
            parentinglink
            = "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/healthy-parenting"
            Mythbusterslink
            = "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters"
            />       
            <Newslider/>
            <CallToAction/>
            <Footer/>       
        </Fragment>
    );
};

export default Covid19Resources;