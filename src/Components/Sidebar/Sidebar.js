import React from 'react';
import './Sidebar.css';
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar ">
            <div className="sidebar_inner">
                <div className="logo">
                    <h2 className='name-color'>Rimon's</h2>
                </div>
                <div className="menu">
                    <ul>
                        <Link to='/'><li className='active'>Home</li></Link>
                        <Link to='/about'><li>About</li></Link>
                        <Link to='/portfolio'><li>Portfolio</li></Link>
                        <Link to='/blog'><li>Blog</li></Link>
                        <Link to='/contact'><li>Contact</li></Link>
                    </ul>
                </div>
                <div className="copyright">
                    <p className='icon'>&#169; 2021 TOKYO</p>
                    <p>Created By Rimon</p>
                </div>
            </div>
        </div>
    );
};

// $('').click(function(){
//     $('').sideToggle();
// })

export default Sidebar;