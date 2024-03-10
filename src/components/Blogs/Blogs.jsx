import React from 'react'
import blogImg from '../../assets/images/blogImg.jpg'
import appwriteImg from '../../assets/images/appwrite_img.png'
import tailwindImg from '../../assets/images/tailwind.png'
const Blogs = () => {
  return (
    <div id='blog' className='flex flex-col items-center justify-center h-100vh mt-20'>
        <div className='h-1/5 mb-2'>
          <h1 className='text-3xl text-gray-800'>Some of My Blogs</h1>
        </div>
        <div className='relative flex flex-col sm:flex-row'>
                <a
                    href='https://medium.com/@sensiddharth093/soaring-high-with-express-js-c9b508f726b8'
                    className='mx-4'
                    target="_blank"
                    rel="noreferrer"
                    aria-label=""
                >
                    <div className="relative  p-px overflow-hidden transition duration-300 transform border rounded shadow-md hover:scale-105 group hover:shadow-xl">
                    <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-blue-400 group-hover:scale-x-100" />
                    <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-blue-400 group-hover:scale-y-100" />
                    <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-blue-400 group-hover:scale-x-100" />
                    <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-blue-400 group-hover:scale-y-100" />
                    <div className="relative p-5 bg-white rounded-sm">
                        <div className="flex flex-col items-center  mb-2">
                            <div className="mb-4 mr-2 bg-violet-400 flex-shrink-0 lg:mb-0">
                                <img src={blogImg} alt="blog-img" className='w-full h-64 object-cover'/>
                            </div>
                            <h6 className="font-semibold leading-5">Soaring High with Express</h6>
                          </div>
                        </div>
                    </div>
                </a>

                <a
                    href='https://medium.com/@sensiddharth093/soaring-high-with-express-js-c9b508f726b8'
                    className='mx-4'
                    target="_blank"
                    rel="noreferrer"
                    aria-label=""
                >
                    <div className="relative  p-px overflow-hidden transition duration-300 transform border rounded shadow-md hover:scale-105 group hover:shadow-xl">
                    <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-blue-400 group-hover:scale-x-100" />
                    <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-blue-400 group-hover:scale-y-100" />
                    <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-blue-400 group-hover:scale-x-100" />
                    <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-blue-400 group-hover:scale-y-100" />
                    <div className="relative p-5 bg-white rounded-sm">
                        <div className="flex flex-col items-center  mb-2">
                            <div className="flex items-center justify-center mb-4 mr-2 lg:mb-0">
                                <img src={appwriteImg} alt="blog-img" className='w-full h-64 object-cover'/>
                            </div>
                            <h6 className="font-semibold leading-5">Backend using Appwrite Cloud</h6>
                          </div>
                        </div>
                    </div>
                </a>

                <a
                    href='https://medium.com/@sensiddharth093/soaring-high-with-express-js-c9b508f726b8'
                    className='mx-4'
                    target="_blank"
                    rel="noreferrer"
                    aria-label=""
                >
                    <div className="relative  p-px overflow-hidden transition duration-300 transform border rounded shadow-md hover:scale-105 group hover:shadow-xl">
                    <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-blue-400 group-hover:scale-x-100" />
                    <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-blue-400 group-hover:scale-y-100" />
                    <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-blue-400 group-hover:scale-x-100" />
                    <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-blue-400 group-hover:scale-y-100" />
                    <div className="relative p-5 bg-white rounded-sm">
                        <div className="flex flex-col items-center  mb-2">
                            <div className="flex items-center justify-center mb-4 mr-2 lg:mb-0">
                                <img src={tailwindImg} alt="blog-img" className='w-100 h-64 object-cover'/>
                            </div>
                            <h6 className="font-semibold leading-5">Tailwind CSS : A discovery</h6>
                          </div>
                        </div>
                    </div>
                </a>
        </div>

    </div>
  )
}

export default Blogs