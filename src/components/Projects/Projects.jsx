import React from 'react';
import ehr from '../../assets/images/ehr.avif';
import blogApp from '../../assets/images/blogApp.png';
import socialApp from '../../assets/images/socialapp.jpg';

const ProjectCarousel = () => {
  return (
    <div id='projects' className='container mx-auto mt-16'>
      <section className='py-5 sm:py-10'>
        <div className='text-center'>
          <p className='font-medium text-2xl sm:text-4xl mb-1 text-slate-800'>
            Projects
          </p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-6'>
          <div>
            <a href="#">
              <div className='overflow-hidden rounded-xl shadow-lg hover:shadow-2xl cursor-pointer mb-10 bg-white'>
                <div>
                  <img src={ehr} alt="Electronic Health Record" className='w-full h-72 object-cover'/>
                </div>
                <div className='text-center px-4 py-6'>
                  <p className='font-medium mb-2 text-lg md:text-xl text-slate-900'>Electronic Health Record</p>
                  <span className='text-lg text-slate-600'>Web Development</span>
                </div>
              </div>
            </a>
          </div>
          <div>
            <a href="#">
              <div className='rounded-xl shadow-lg hover:shadow-2xl cursor-pointer mb-10 bg-white overflow-hidden'>
                <div>
                  <img src={blogApp} alt="Blog App" className='w-full h-72 object-cover'/>
                </div>
                <div className='text-center px-4 py-6'>
                  <p className='font-medium mb-2 text-lg md:text-xl text-slate-900'>Air Bay</p>
                  <span className='text-lg text-slate-600'>Web Development</span>
                </div>
              </div>
            </a>
          </div>
          <div>
            <a href="#">
              <div className='rounded-xl shadow-lg hover:shadow-2xl cursor-pointer mb-10 bg-white overflow-hidden'>
                <div>
                  <img src={socialApp} alt="Social Media App" className='w-full h-72 object-cover'/>
                </div>
                <div className='text-center px-4 py-6'>
                  <p className='font-medium mb-2 text-lg md:text-xl text-slate-900'>Social Media App</p>
                  <span className='text-lg text-slate-600'>Web Development</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectCarousel;
