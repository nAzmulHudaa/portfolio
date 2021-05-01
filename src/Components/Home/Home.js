import React from 'react';
import './Home.css';
import author from '../../images/me.png'
import Sidebar from '../Sidebar/Sidebar';
//using fontawesome inside of react project
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import facebook from '../../images/fb.png';
import linkedin from '../../images/in.png'
import twitter from '../../images/twitter.png';


const Home = () => {
    return (
        <div className="maindiv row">
            <div className="col-md-4">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-8  ">
                <div className="home d-flex justify-content-center">
                    <div className="col-md-3">
                        <div className="home-img">
                            <img src={author} alt="" />
                        </div>
                    </div>
                    <div className="col-md-8 ">
                    <div className="home-content">
                        <div className="name">
                            <h1>Nazmul Huda Rimon</h1>
                        </div>
                        <div className="description">
                            <h6>Creative Photographer based in New York and happy to travel all over Europe to capture photos.</h6>
                        </div>
                        <div className="connect">
                            <a href="https://www.facebook.com/nazmulhudarimon123/" target="_blank"><img src={facebook} alt="" className='facebook'/></a>
                            <a href="https://www.linkedin.com/in/md-nazmul-huda-rimon-6a588a190/" target='_blank'><img src={linkedin} alt="" className='linkdin'/></a>
                            <a href="https://twitter.com/MdNazmulHudaRi1" target='_blank'><img src={twitter} alt="" className="twitter"/></a>
                        </div>
                    </div>
                        <button className='cv-btn'>Download CV</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;