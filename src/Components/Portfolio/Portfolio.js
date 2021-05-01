import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import rock from '../../images/rock.png';
import website from '../../images/website.png';
import football from '../../images/football.png'
import temp from '../../images/temp.png'
import './Portfolio.css';

const Portfolio = () => {
    return (
        <div className="portfolio row font">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9">
                <h1 className='name-color project-name text-center'>P R O J E C T S</h1>
                    <div className="row projects">
                    <div className="card">
                    <img src={website} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title name-color">Card title</h5>
                            <p className="card-text description-color">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="https://cleaning-website-3071d.web.app/" target="_blank"><button className='cardBtn'>Live Link</button></a>

                        </div>

                        
                </div>
                <div className="card">
                    <img src={rock} className="card-img-top" alt="..."/>
                        <div div className="card-body">
                            <h5 className="card-title name-color">Card title</h5>
                            <p className="card-text description-color">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="https://nazmulhudaa.github.io/hard-rock-project/" target='_blank'><button className='cardBtn'>Live Link</button></a>

                </div>

                </div>
                <div className="card">
                    <img src={football} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title name-color">Card title</h5>
                            <p className="card-text description-color">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="https://lucid-hopper-b5b62a.netlify.app/" target='_blank'><button className='cardBtn'>Live Link</button></a>

                        </div>


                </div>
                <div className="card">
                    <img src={temp} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title name-color">Card title</h5>
                            <p className="card-text description-color">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="https://nazmulhudaa.github.io/hungry-monstar/" target="_blank"><button className='cardBtn'>Live Link</button></a>
                        </div>
                    </div>
                </div>
            </div>
         </div>

    );
};

export default Portfolio;