import React, { useState } from 'react';
import { handleScroll } from './../../utils/handleScroll.js';
import logo from '../../assets/images/logo.png';
import './Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="relative bg-gray-100 z-50 shadow-xl">
            <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-screen-xl md:px-24 lg:px-8">
                <div className="relative flex items-center justify-between">
                    <a
                        href="/"
                        aria-label="SidSparks"
                        title="SidSparks"
                        className="items-center flex"
                    >
                        <i className="text-2xl text-blue-500 fas fa-layer-group"></i>
                        <h2 className="font-serif mx-4 text-2xl text-slate-800">Siddharth-Sen ✨</h2>
                    </a>
                    <button
                        onClick={toggleMenu}
                        className="block lg:hidden focus:outline-none"
                    >
                        {menuOpen ? (
                            <i className="fas fa-times text-2xl text-blue-700"></i>
                        ) : (
                            <i className="fas fa-bars text-2xl text-blue-700"></i>
                        )}
                    </button>
                    <ul
                        className={`${
                            menuOpen ? 'block' : 'hidden'
                        } lg:flex lg:items-center lg:justify-between`}
                    >
                        <li>
                            <a
                                href="#maker-at-heart"
                                className="font-medium mx-6 tracking-wide text-gray-700 transition-colors duration-150 hover:text-blue-400"
                                onClick={handleScroll}
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#skills"
                                className="font-medium mx-6 tracking-wide text-gray-700 transition-colors duration-150 hover:text-blue-400"
                                onClick={handleScroll}
                            >
                                Skills
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact-me"
                                onClick={handleScroll}
                                className="font-medium text-gray-700 mx-6 transition-colors duration-150 hover:text-blue-400"
                            >
                                Contact
                            </a>
                        </li>
                        <li>
                            <a
                                href="#blog"
                                className="font-medium mx-6 tracking-wide text-gray-700 transition-colors duration-150 hover:text-blue-400"
                                onClick={handleScroll}
                            >
                                Blog
                            </a>
                        </li>
                        <li>
                            <a
                                href="#projects"
                                className="font-medium mx-6 tracking-wide text-gray-700 transition-colors duration-150 hover:text-blue-400"
                                onClick={handleScroll}
                            >
                                Projects
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
