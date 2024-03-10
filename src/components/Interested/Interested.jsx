import React from 'react'
import makerAtHeart from '../../assets/images/makerAtHeart.gif';
import { handleScroll } from '../../utils/handleScroll';
const Interested = () => {
  return (
    <div id='interested' className='bg-white shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-xl overflow-hidden mx-auto max-w-md md:max-w-6xl'>
        <div className='md:flex'>
            <div className='md:shrink-0'>
                <img 
                    src={makerAtHeart}
                    className='h-48 w-full object-cover md:h-full md:w-48'
                    alt=''                
                />
            </div>
            <div className='p-8'>
                <div className='mt-1 text-lg font-semibold text-gray-800'>
                    Interested in my service ?
                </div>
                <p className='mt-2 text-slate-500'>
                    Contact me for collaboration, and assistance for your project.
                </p>
                
            </div>
            <div className="flex items-center justify-start lg:justify-end">
                    <a
                        href="#contact-me"
                        onClick={handleScroll}
                        className="items-center h-12 px-6 py-3 font-medium tracking-wide text-gray-800 transition duration-200 rounded shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:bg-blue-400 hover:text-gray-200"
                    >
                        Contact Me
                    </a>
            </div>
        </div>
    </div>
  )
}

export default Interested