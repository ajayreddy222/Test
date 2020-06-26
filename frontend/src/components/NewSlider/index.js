import React from 'react';
import SlickSlider from '../UI/Slick'
import SliderData from '../../data/Slider/insight'
import {Link} from "react-router-dom";


const NextArrow = ({className, onClick}) => {
    return (
        <button className={className} onClick={onClick}><i className="fa fa-angle-right"/></button>
    )
};

const PrevArrow = ({className, onClick}) => {
    return (
        <button className={className} onClick={onClick}><i className="fa fa-angle-left"/></button>
    )
};

const Slider = () => {
        const settings = {
            arrows: true,
            dots: false,
            nextArrow: <NextArrow/>,
            prevArrow: <PrevArrow/>,
            responsive: [
                {
                    breakpoint: 500,
                    settings: {
                        arrows: false,
                        dots: true
                    }
                }
            ]
        };

        return (
            <div className={'slider-area'}>
                <SlickSlider settings={settings}>
                    {

                        // Slider component jason
                        SliderData.map(item => (
                            <div key={item.id}>
                               
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-xl-10">
                                                    
                                                  <div className="slider-item"
                                     style={{backgroundImage: `url(${require('../../assets/img/corona/' + item.id + ".png")})`}}>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </SlickSlider>
            </div>
        );
    }
;

export default Slider;