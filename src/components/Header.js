import React, { useState, useEffect } from 'react';
import '../css/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const toggleBtn = document.querySelector('.navbar__toggleBtn');
        const menu = document.querySelector('.navbar__menu');
        const icons = document.querySelector('.navbar__icons');

        const handleToggle = () => {
            setIsActive(!isActive);
        };

        if (toggleBtn) {
            toggleBtn.addEventListener('click', handleToggle);
        }

        return () => {
            if (toggleBtn) {
                toggleBtn.removeEventListener('click', handleToggle);
            }
        };
    }, [isActive]);

    return (
        <nav className='navbar'>
            <div className='navbar__logo'>
                <i className="fa-solid fa-b"></i>
                <a>barcode</a>
            </div>

            <ul className={`navbar__menu ${isActive ? 'active' : ''}`}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/project'>Project</Link></li>
                <li><Link to='/blog'>Blog</Link></li>
                <li><Link to='/sns'>SNS</Link></li>
            </ul>

            <ul className={`navbar__icons ${isActive ? 'active' : ''}`}>
                <li><a href='https://discord.gg/uNaXK8EcNE' target='blank'><i className="fa-brands fa-discord"></i></a></li>
                <li><a href='https://github.com/lililliililil' target='blank'><i className="fa-brands fa-github"></i></a></li>
            </ul>

            <a href="#" className="navbar__toggleBtn">
                <i className="fas fa-bars"></i>
            </a>
        </nav>
    );
};

export default Header;
