import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import Home from './components/Home';
import Project from './components/Project';
import Blog from './components/Blog.js';
import SNS from './components/SNS';
import NotFound from './components/NotFound';


function App() {

    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/project' element={<Project />} />
                <Route path='/Blog' element={<Blog />} />
                <Route path='/sns' element={<SNS />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>

            <footer className='footer'>
                    <div className='copyright'>
                        <p>copyright ⓒ 2024 Barcode ALL Rights Reserved</p>
                    </div>
                    <div className='slash'>
                        <p>|</p>
                    </div>
                    <div className='sns'>
                        <a href='mailto:g.barcode.dev@gmail.com'><li>g.barcode.dev@gmail.com</li></a>
                    </div>
                    <h5>This is only test version</h5>
            </footer>
        </Router>
    );
}

export default App;
