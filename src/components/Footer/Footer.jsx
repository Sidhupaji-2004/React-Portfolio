import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import ContactInfo from '../../utils/contactInfo';

const Footer = () => {
  return (
    <div className='w-full h-auto md:h-96 bg-blue-500'>
      <div className='h-full mx-10 flex flex-col sm:flex-row justify-around items-center'>
        <div className='flex flex-col justify-center h-2/3 px-6 py-6'>
          <h1 className='text-white text-5xl font-bold mb-6 font-sans'>Siddharth</h1>
          <p className='text-white text-xl font-normal font-sans mb-4'>Software Developer</p>
        </div>

        <div className='flex items-center justify-center'>
          <a href='#contact-me' className='font-medium text-xl tracking-wide text-gray-100 mx-5 hover:text-gray-300'>
            Contact
          </a>

          <a href='#interested' className='font-medium text-xl tracking-wide text-gray-100 mx-5 hover:text-gray-300'>
            Services
          </a>

          <a href='#hero' className='font-medium text-xl tracking-wide text-gray-100 mx-5 hover:text-gray-300'>
            Portfolio
          </a>
        </div>

        <div className='flex flex-row md:flex-col items-center justify-center'>
          {ContactInfo.map((item) => (
            <a
              className='mt-4'
              href={item.link}
              target='_blank'
              rel='noreferrer'
              aria-label=''
              key={item.title}
            >
              <div className='flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-gray-100 lg:mb-0 hover:bg-violet-400'>
                <i className={`${item.icon}`}></i>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
