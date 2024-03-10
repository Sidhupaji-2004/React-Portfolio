import React from 'react'
import codeRender from '../../assets/images/codeRender.gif'
import './AboutMe.css';

function AboutMe() {
  return (
    <div className="overflow-hidden w-full" id="about-me">
      <div className="bg-white shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] rounded-xl overflow-hidden mx-auto w-full md:max-w-6xl mb-5">
        <div className="flex flex-col items-center justify-between w-full lg:flex-row">
                <div className="flex flex-col sm:flex-row justify-center items-center">
                <div className="flex items-center justify-center lg:w-1/2">
                        <div className="flex w-full relative">
                            <div className="image-container">
                                <img
                                    src={codeRender}
                                    alt="CodeRenderingGif"
                                    className="cartoon-image h-64 w-full object-cover rounded-2xl"
                                />
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex flex-col sm:flex-row items-center'>
                        <div className='w-full flex flex-col items-center justify-center p-2 py-8'>

                            <h1 className="mt-4 text-gray-900 text-sm md:text-4xl animate-fadeIn font-extrabold">About Me</h1>

                            <p className='mt-4 text-gray-700 text-sm md:text-xl animate-fadeIn'>
                                I am a Frontend Developer, based in Kolkata, India. I code in React JS and Tailwind CSS making great UI designs come to life.
                                I love to listen to pop music as much as I love to write code. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default AboutMe