import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import about from '../../images/about.jpg'
import './About.css'

const About = () => {
    return (
        <div className="about-sec row font">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9">
                <div className="col-md-10 about-img">
                    <img src={about} alt="" />
                </div>
                <div className="col-md-8 d-flex ">
                    <div className="col-md-8 about-description">
                        <h1 className='about-name'>Nazmul Huda & Programmer</h1>
                        <h5 className='name-color'>Full Stack Web developer</h5>
                        <p>“ I’m particularly motivated in mission- driven & people-first environments, especially those focused on creating an inclusive world. I also truly enjoy working alongside founders and helping startups think about crystallizing the value they bring to customers ”</p>
                        <button className='learnMoreBtn'>Learn More</button>
                    </div>
                    <div className="col-md-8 my-details">
                        <p><b>Birthday:</b>21st March 1999</p>
                        <p><b>Age:</b>22</p>
                        <p><b>Address:</b>Dhaka,Bangladesh</p>
                        <p><b>Email:</b>nazmulhuda0327@gmail.com</p>
                        <p><b>Phone:</b>+8801312595204</p>
                        <p><b>Study:</b>BSc in Computer Science</p>
                        <p><b>Freelance:</b>Available</p>
                    </div>
                </div>
                <div className="col-md-9">
                    <h1 className='name- about-name ml-3 mt-5 about-description'>SKILLS</h1>
                    <div className="skill d-flex">
                        <div className="col-md-8 about-description">
                            <h6 className='name-color'>Javascript</h6>
                            <div class="progress w-75" style={{ height: '10px', marginBottom: '1.2em' }} >
                            <div class="progress-bar" role="progressbar" style={{ width: "90%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="75" ></div>
                            </div>
                            <h6 className='name-color'>React.js</h6>
                            <div class="progress w-75" style={{ height: '10px', marginBottom: '1.2em' }} >
                                <div class="progress-bar" role="progressbar" style={{ width: "70%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="75" ></div>
                            </div>
                            <h6 className='name-color'>React Native</h6>
                            <div class="progress w-75" style={{ height: '10px', marginBottom: '1.2em' }} >
                                <div class="progress-bar" role="progressbar" style={{ width: "60%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="75" ></div>
                            </div>
                        </div>
                        <div className="col-md-8 about-description ">
                        <h6 className='name-color'>Node.js</h6>
                            <div class="progress w-75" style={{ height: '10px', marginBottom: '1.2em' }} >
                                <div class="progress-bar" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="75" ></div>
                            </div>
                            <h6 className='name-color'>Mongo DB</h6>
                            <div class="progress w-75" style={{ height: '10px', marginBottom: '1.2em' }} >
                                <div class="progress-bar" role="progressbar" style={{ width: "70%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="75" ></div>
                            </div>
                            <h6 className='name-color'>Redux</h6>
                            <div class="progress w-75" style={{ height: '10px', marginBottom: '1.2em' }} >
                                <div class="progress-bar" role="progressbar" style={{ width: "60%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="75" ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;