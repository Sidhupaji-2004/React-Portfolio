import React from 'react'
import challenge from '../../assets/images/challenge.png';
import './MakerAtHeart.css';

const MakerAtHeart = () => {
  return (
    <div 
        id="maker-at-heart"
        className='mt-4 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-[4rem] overflow-hidden bg-gradient-to-tl from-blue-500 to-white w-full 
        flex relative flex-col items-center justify-center md:items-start px-5 py-10 pb-12 sm:p-16 
        mx-auto max-w-md md:max-w-6xl'
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-blue-100 to-blue-300" >
      </div>
      <div className="text-4xl md:text-h1 md:leading-[1] text-gray-900 font-bold z-10 leading-6">How Do I Work ? </div>
      <div className="relative flex flex-col sm:flex-row mt-10 md:mt-10">
        <div className="text-h2 tracking-wide text-gray-800 font-semibold text-2xl undefined"></div>
        <div className="relative mt-4 grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="bg-gradient-to-br from-blue-950 to-blue-700 bg-opacity-30 rounded-[4rem] w-full h-full md:w-44 md:h-44 p-7 flex flex-col items-start justify-between">
            <div className="text-white text-sm tracking-wide text-sx md:text-sm">Writing Clean Code that's enjoyable to work with</div>
          </div>
          <div className="bg-gradient-to-br from-blue-950 to-blue-700 bg-opacity-30 rounded-[4rem] w-full h-full md:w-44 md:h-44 p-7 flex flex-col items-start justify-between">
            <div className="text-white text-sm tracking-wide text-sx md:text-sm">Having a strong grasp of core CS fundamentals</div>
          </div>
          <div className="bg-gradient-to-br from-blue-950 to-blue-700 bg-opacity-30 rounded-[4rem] w-full h-full md:w-44 md:h-44 p-7 flex flex-col items-start justify-between">
            <div className="text-white text-sm tracking-wide text-sx md:text-sm">Pushing myself out of my comfort zone</div>
          </div>
          <div className="bg-gradient-to-br from-blue-950 to-blue-700 bg-opacity-30 rounded-[4rem] w-full h-full md:w-44 md:h-44 p-7 flex flex-col items-start justify-between">
            <div className="text-white text-sm tracking-wide text-sx md:text-sm">Integrating AI tools like Tabnine, GPT and Gemini in my workflow</div>
          </div>
          <div className="bg-gradient-to-br from-blue-950 to-blue-700 bg-opacity-30 rounded-[4rem] w-full h-full md:w-44 md:h-44 p-7 flex flex-col items-start justify-between">
            <div className="text-white text-sm tracking-wide text-sx md:text-sm">Thinking Deep about innovative ideas and solutions</div>
          </div>
          <div className="bg-gradient-to-br from-blue-950 to-blue-700 bg-opacity-30 rounded-[4rem] w-full h-full md:w-44 md:h-44 p-7 flex flex-col items-start justify-between">
            <div className="text-white text-sm tracking-wide text-sx md:text-sm">Implementing beautiful UI</div>
          </div>
        </div>
        <img src={challenge} alt='challenge-img' className='ml-20 w-64 h-64 object-cover'/>
      </div>
    </div>
  )
}

export default MakerAtHeart