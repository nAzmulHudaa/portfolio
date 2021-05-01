import React from 'react';
import './Sidebar.css';
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar ">
            <div className="sidebar_inner">
                <div className="logo">
                    <img src={logo} alt="" />
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

export default Sidebar;