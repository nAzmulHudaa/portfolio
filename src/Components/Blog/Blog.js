import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Blog = () => {
    return (
        <div className="blog row">
            <div className="col-md-4">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-8">
                <h3 className='name-color'>Blog Coming Soon</h3>
            </div>
        </div>
    );
};

export default Blog;