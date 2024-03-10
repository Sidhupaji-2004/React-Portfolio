import React from 'react';
import ContactInfo from '../../utils/contactInfo';


const ContactMe = () => {
  return (
    <div
        id="contact-me"
        className="px-4 py-16 mx-auto items-center sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
        <div className="flex justify-center items-center">
            <h2 className="max-w-lg mb-10 font-sans text-4xl font-bold text-gray-900 sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                    <span className="relative">Contact Me</span>
                </span>
            </h2>
        </div>

        <div className="grid gap-8 row-gap-5 lg:grid-cols-3">
            {ContactInfo.map((item) => (
                <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label=""
                    key={item.title}
                >
                    <div className="relative  p-px overflow-hidden transition duration-300 transform border rounded shadow-md hover:scale-105 group hover:shadow-xl">
                    <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-blue-400 group-hover:scale-x-100" />
                    <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-blue-400 group-hover:scale-y-100" />
                    <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-blue-400 group-hover:scale-x-100" />
                    <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-blue-400 group-hover:scale-y-100" />
                    <div className="relative p-5 bg-white rounded-sm">
                        <div className="flex flex-col items-center  mb-2 lg:flex-row">
                            <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-violet-400 lg:mb-0">
                                <i className={`${item.icon}`}></i>
                            </div>
                            <h6 className="font-semibold leading-5">{item.title}</h6>
                        </div>
                            <p className="mb-2 text-sm text-gray-900 text-center lg:text-start">
                            {item.description}
                            </p>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    </div>
  )
}

export default ContactMe