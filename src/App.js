import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Project from './components/Project';
import SNS from './components/SNS';


function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/project' element={<Project />} />
                <Route path='/sns' element={<SNS />} />
            </Routes>

            <footer className='footer'>
                <p>copyright ⓒ 2024 Barcode ALL Rights Reserved</p>
            </footer>
        </Router>
    );
}

export default App;
