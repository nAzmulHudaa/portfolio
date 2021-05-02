import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact row font">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9 ">
                <h6 className='description-color ml-3 mt-5'>CONTACT</h6>
                <h3 className='name-color about-name ml-3'>Get In Touch</h3>
                <p className='text-center'><iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58360.280580006045!2d90.35725867323328!3d23.906721153818328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c4488706e2d9%3A0xee45004fa6ba8d03!2sTongi!5e0!3m2!1sen!2sbd!4v1619946913449!5m2!1sen!2sbd" width="700" height="550"  allowfullscreen="" loading="lazy"></iframe></p>
                <div className="col-md-10">
                <form action="https://formspree.io/f/mknkozpe" method="POST">
                <div className="form">
                    <div className="first">
                        <ul>
                            <li><input type="text" placeholder='Name' id='name'  name="name"/></li>
                            <li><input type="text" placeholder='Email' id='email' name='email'/></li>
                        </ul>
                    </div>
                    <div className="last">
                        <ul>
                            <li><textarea id='message' placeholder='Message' name='message'></textarea></li>
                            <li><button className='cardBtn' type='submit'>Send Message</button></li>
                        </ul>
                        
                    </div>
                </div>
                </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;