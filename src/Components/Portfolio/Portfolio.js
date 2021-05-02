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
                            <h5 className="card-title name-color">Home Cleaning Website</h5>
                            <p className="card-text description-color">I have made a dynamic service providing website with React js,Node js,Mongo DB and Express js.Login system,Admin Panel, Payment Integration and CRUD operation has been implemented.</p>
                            <a href="https://cleaning-website-3071d.web.app/" target="_blank"><button className='cardBtn'>Live Link</button></a>

                        </div>

                        
                </div>
                <div className="card">
                    <img src={rock} className="card-img-top" alt="..."/>
                        <div div className="card-body">
                            <h5 className="card-title name-color">Hard Rock Website</h5>
                            <p className="card-text description-color">Here I have developed a website where user can search for songs and they can listen music for 30 sec and even they can see the lyrics of  the song they are hearing.</p>
                            <a href="https://nazmulhudaa.github.io/hard-rock-project/" target='_blank'><button className='cardBtn'>Live Link</button></a>

                </div>

                </div>
                <div className="card">
                    <img src={football} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title name-color">Team Tracker Website</h5>
                            <p className="card-text description-color">Here I have developed a website where user can see the England Football clubs.After clicking the  button Explore they will see the details of the team.</p>
                            <a href="https://lucid-hopper-b5b62a.netlify.app/" target='_blank'><button className='cardBtn'>Live Link</button></a>

                        </div>


                </div>
                <div className="card">
                    <img src={temp} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title name-color">Hungry Monstar</h5>
                            <p className="card-text description-color">I have developed an website where user can search for meal they love and they will see the results. The meal they like If they click on them then they will show details of the meal.</p>
                            <a href="https://nazmulhudaa.github.io/hungry-monstar/" target="_blank"><button className='cardBtn'>Live Link</button></a>
                        </div>
                    </div>
                </div>
            </div>
         </div>

    );
};

export default Portfolio;