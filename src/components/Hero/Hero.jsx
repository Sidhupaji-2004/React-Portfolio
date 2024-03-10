import React from 'react';
import ContactInfo from '../../utils/contactInfo';
import { handleScroll } from '../../utils/handleScroll';
import code from '../../assets/images/code.png';
import './Hero.css';

const Hero = () => {
  return (
    <div id='hero' className="w-full overflow-hidden mb-60">
      <div className="relative px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20">
        <div className="flex flex-col items-center justify-between w-full lg:flex-row">
            <div className="mt-40 flex flex-col gap-10 items-center max-w-xl mb-6 lg:text-end">
              <h1 className="uppercase font-sans text-3xl font-normal tracking-tight text-gray-700 sm:text-4xl sm:leading-none max-w-lg mb-6 typewriter">
                Hi there 👋, I'm{' '}
                <span className="inline-block text-black animate-bounce uppercase font-extrabold">Siddharth</span>
              </h1>
              <p className='font-sans text-gray-700 text-sm md:text-xl font-semibold typing-text'>
                ✨ Software Developer in React. Currently Improving my skills.
              </p>

              <div className="flex items-center justify-start lg:justify-end">
                <a
                  href="#contact-me"
                  onClick={handleScroll}
                  className="items-center h-12 px-6 py-3 shadow-2xl font-medium tracking-wide text-gray-800 transition duration-200 rounded hover:bg-blue-500 hover:text-gray-200"
                >
                  Contact Me
                </a>
              </div>

              <div className='flex items-center justify-center'>
              {ContactInfo.map((item) => (
                <a 
                  className='mt-4' 
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label=""
                  key={item.title}
                >
                  <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-white lg:mb-0 hover:bg-blue-300">
                    <i className={`${item.icon}`}></i>
                  </div>
                </a>
              ))}
            </div>
            </div>
        </div>
      </div>
      <img
        className='svg-rect'
        src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzI1IiBoZWlnaHQ9Ijk5MCIgdmlld0JveD0iMCAwIDcyNSA5OTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHg9IjY2My45NzMiIHk9Ii00NTQiIHdpZHRoPSIxMjcwLjAzIiBoZWlnaHQ9IjkzOSIgcng9IjE1IiB0cmFuc2Zvcm09InJvdGF0ZSg0NSA2NjMuOTczIC00NTQpIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSI2NjMuOTczIiB5MT0iLTQ1NCIgeDI9IjE1NTkuNjMiIHkyPSI3NTcuNDEyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM2QTk4RjAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNDk2MURDIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg=='
        alt="Hero SVG"
      >
      </img>
      <img
        className='hidden md:block code-img sm:w-50 sm:h-50 rounded-2xl shadow-2xl'
        src={code}
        alt="Hero SVG"
      />
    </div>
  );
};

export default Hero;
