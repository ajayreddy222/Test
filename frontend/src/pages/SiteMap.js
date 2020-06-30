import React from "react";
import {Link} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import navbarData from "../data/Navbar/navbar";
import CallToAction from "../components/CallToAction";

const SiteMap = () => (
    <>
        <Header/>
        <div className='container'>
            <ul>
                {navbarData.map((item) => {
                    if (item.id === 6) {
                        return null;
                    }

                    return (
                        <div key={item.id} className="row">
                            <div className="col-4 col-lg-2 font-weight-bold h5">
                                <a className="text-dark">{item.title}</a>
                            </div>
                            <ul className="col-8 col-lg-10">
                                {item.subMenu && item.subMenu.map((menu) => (
                                    <>
                                        <li key={menu.id}>
                                            <Link to={menu.link} className="text-dark">
                                                {menu.title}
                                            </Link>
                                        </li>
                                        <hr className="divider mt-3 mb-3"/>
                                    </>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </ul>
        </div>
        <CallToAction/>
        <Footer/>
    </>
);

export default SiteMap;