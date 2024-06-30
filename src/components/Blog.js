// Blog.js
import React, { useState } from 'react';
import '../css/Blog.css';

const Blog = () => {

    let [postname, changepostname] = useState(['test1', 'test2', 'test3',' test4'])
    let [day, daychange] = useState(['6|30', '6|30', '6|29', '6|28'])

    return (
        <div className='Blog'>
            <div className='post'>
                <h3> { postname[1] }  <span>♥</span>  </h3>
                <p> { day[1] } </p>
            </div>
            <div className='post'>
                <h3> { postname[2] } </h3>
                <p> { day[2] } </p>
                <hr />
            </div>
            <div className='post'>
                <h3> { postname[3] } </h3>
                <p> { day[3] } </p>
                <hr />
            </div>
            <div className='post'>
                <h3> { postname[4] } </h3>
                <p> { day[4] } </p>
                <hr />
            </div>
        </div>
    );
};

export default Blog;
