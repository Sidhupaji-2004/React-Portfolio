import React, { useState, useEffect } from 'react';
import Projects from './components/Projects/Projects.jsx';
import './App.css';
import { DNA } from 'react-loader-spinner';
import Interested from './components/Interested/Interested.jsx';
import MakerAtHeart from './components/MakerAtHeart/MakerAtHeart.jsx';
import Skills from './components/Skills/Skills.jsx';
import AboutMe from './components/AboutMe/AboutMe.jsx';
import Hero from './components/Hero/Hero.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import ContactMe from './components/ContactMe/ContactMe.jsx';
import Footer from './components/Footer/Footer.jsx';
import Blogs from './components/Blogs/Blogs.jsx';
import whatsapp from '../src/assets/svgs/whatsapp.svg';

const App = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <div className="App">
            {loading ? (
                <DNA
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 9999,
                    }}
                    wrapperClass="dna-wrapper"
                />
            ) : (
                <>
                    <Navbar />
                    <Hero />
                    <Projects />
                    <AboutMe />
                    <MakerAtHeart />
                    <Skills />
                    <Interested />
                    <Blogs />
                    <ContactMe />
                    <Footer />
                    <a
                        href="https://wa.me/917003407001"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whatsapp-btn bg-green-400 hover:bg-green-700 text-white rounded-full p-4 shadow-lg fixed right-20 bottom-20 z-20 transition-all duration-300"
                        style={{
                            position: 'fixed',
                            right: '20px',
                            bottom: '20px',
                            zIndex: 10,
                        }}
                    >
                        <img src={whatsapp} alt="WhatsApp" className="h-12 w-12" />
                    </a>
                </>
            )}
        </div>
    );
};

export default App;
