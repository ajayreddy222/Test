import React from 'react';
import parse from "html-react-parser";
import Content from "../UI/Content";
import Text from "../OurApproach/ApproachSection2"

import Pic1 from '../../assets/img/IMG_3110.JPG';
import Pic2 from '../../assets/img/Green+Background(1).png';
import Pic3 from '../../assets/img/culturalshow.jpg';
import Pic4 from '../../assets/img/manspeaking.jpg';
import Pic5 from '../../assets/img/IMG_0057.JPG';

import ApproachSection2data from '../../data/OurApproach/ApproachSectionData2.json';
import ApproachSection3data from '../../data/OurApproach/ApproachSectionData3.json';
import ApproachSection4data from '../../data/OurApproach/ApproachSectionData4.json';
import ApproachSection5data from '../../data/OurApproach/ApproachSectionData5.json';
import ApproachSection6data from '../../data/OurApproach/ApproachSectionData6.json';






const ApproachSect = (props) => {
    props = props.json || props;

    const Background1 = Pic1
    const Background2 = Pic2
    const Background3 = Pic3
    const Background4 = Pic4
    const Background5 = Pic5
   


    return (<div className="about-area-wrapper sm-top">
    <div className="container">

        {/* <div className="row align-items-lg-center"> */}
            {/* <div className="col-md-6 col-lg-5">
                <Thpumbnail classes="about-thumb" imgSrc={require('../../../assets/img' + aboutData.thumb)}/>
            </div> */}

            <div className="col">
                <Content className="Section-content">
                    <Text json={ApproachSection6data}/>
                    <hr className="divider"/>
                    <h1 className="ApproT">{props.title1}</h1>
                    <div className="picrow">
                        <div className ="imgAppr1" style={{backgroundImage: `url("${Background2}")`}}>
                            <div className="pictext1">
                            {/* <Thumbnail className="about-thumb1" imgSrc={require('../../assets/img' + props.img2)}/> */}
                            <h4 className="picheader1"> {props.number1}</h4>
                            <p className="picpara1">{parse(props.text1)}</p>
                            </div>
                        </div>
                        <div className="imgAppr2"style={{backgroundImage: `url(${Background1})`}}>
                            <div className="pictext2">
                                {/* <Thumbnail className="about-thumb1" imgSrc={require('../../assets/img' + props.img1)}/> */}
                                <h4 className="picheader2"> {props.number2}</h4>
                                <p className="picpara2">{parse(props.text2)}</p>
                            </div>
                        </div>
                    </div>
                    <Text json={ApproachSection2data}/>
                    <hr className="divider"/>
                    <div className="picrow">
                        <div className ="imgAppr1" style={{backgroundImage: `url("${Background2}")`}}>
                            <div className="pictext1">
                            {/* <Thumbnail className="about-thumb1" imgSrc={require('../../assets/img' + props.img2)}/> */}
                            <h4 className="picheader1"> {props.number3}</h4>
                            <p className="picpara1">{parse(props.text3)}</p>
                            </div>
                        </div>
                        <div className="imgAppr2"style={{backgroundImage: `url(${Background5})`}}>
                            <div className="pictext2">
                                {/* <Thumbnail className="about-thumb1" imgSrc={require('../../assets/img' + props.img1)}/> */}
                                <h4 className="picheader2"> {props.number4}</h4>
                                <p className="picpara2">{parse(props.text4)}</p>
                            </div>
                        </div>
                    </div>
                    <Text json={ApproachSection3data}/>
                    <hr className="divider"/>
                    <div className="picrow">
                        <div className ="imgAppr1" style={{backgroundImage: `url("${Background2}")`}}>
                            <div className="pictext1">
                            {/* <Thumbnail className="about-thumb1" imgSrc={require('../../assets/img' + props.img2)}/> */}
                            <h4 className="picheader1"> {props.number5}</h4>
                            <p className="picpara1">{parse(props.text5)}</p>
                            </div>
                        </div>
                        <div className="imgAppr2"style={{backgroundImage: `url(${Background4})`}}>
                            <div className="pictext2">
                                {/* <Thumbnail className="about-thumb1" imgSrc={require('../../assets/img' + props.img1)}/> */}
                                <h4 className="picheader2"> {props.number6}</h4>
                                <p className="picpara2">{parse(props.text6)}</p>
                            </div>
                        </div>
                    </div>
                    <Text json={ApproachSection4data}/>
                    <hr className="divider"/>
                    <div className="picrow">
                        <div className ="imgAppr1" style={{backgroundImage: `url("${Background2}")`}}>
                            <div className="pictext1">
                            {/* <Thumbnail className="about-thumb1" imgSrc={require('../../assets/img' + props.img2)}/> */}
                            <h4 className="picheader1"> {props.number7}</h4>
                            <p className="picpara1">{parse(props.text7)}</p>
                            </div>
                        </div>
                        <div className="imgAppr2"style={{backgroundImage: `url(${Background3})`}}>
                            <div className="pictext2">
                                {/* <Thumbnail className="about-thumb1" imgSrc={require('../../assets/img' + props.img1)}/> */}
                                <h4 className="picheader2"> {props.number8}</h4>
                                <p className="picpara2">{parse(props.text8)}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                    <Text json={ApproachSection5data}/>
                    <hr className="divider"></hr>
                    </div>                    
                </Content>
            </div>
        {/* </div> */}
    </div>
</div>);

}

export default ApproachSect