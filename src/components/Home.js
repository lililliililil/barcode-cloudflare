// Home.js
import React from 'react';
import '../css/Home.css';

const Home = () => {
    return (
        <div className='home'>
            <div className='info_making'>
                <h1>Home page</h1>
                <h2>Making...</h2>
            </div>
            <div id='homeimg' className='homeimg'>
                <img></img>
            </div>
        </div>
    );
};

export default Home;
