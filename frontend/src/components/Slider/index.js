import React from 'react';
import parse from 'html-react-parser'
import SlickSlider from '../UI/Slick'
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

const SLIDER_DEFAULT = {
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

const Slider = ({json, settings, show_btn}) => {
    settings = settings || SLIDER_DEFAULT
    show_btn = json.length>2;
    return (
        <div className={'slider-area'}>
            <SlickSlider settings={settings}>
                {
                    json.map(item => (
                        <div key={item.id}>
                            <div className="slider-item"
                                 style={{backgroundImage: `url(${require('../../assets/img/' + item.bg)})`}}>
                                <div className="container">
                                    <div className="rowbg">
                                        <div className="col-xl-7">
                                            <div className="slider-content">
                                                <h2>{parse(item.title)}</h2>
                                                <p>{parse(item.text)}</p>
                                            
                                                { show_btn &&
                                                    <Link to={`${process.env.PUBLIC_URL + item.btnLink}`} className="btn btn-brand">{item.btnText}</Link>
                                                }
                                                </div>
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
};

export default Slider;