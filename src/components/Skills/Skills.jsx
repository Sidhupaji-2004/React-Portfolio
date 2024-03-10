import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProgressBar from './ProgressBar';
import mysql from '../../assets/svgs/mysql.svg';
import nodejs from '../../assets/svgs/nodejs.svg';
import cpp from '../../assets/svgs/cpp.svg';
import git from '../../assets/svgs/git.svg';
import html from '../../assets/svgs/html.svg';
import css from '../../assets/svgs/css.svg';
import java from '../../assets/svgs/java.svg';
import vsCode from '../../assets/svgs/vsCode.svg';
import js from '../../assets/svgs/js.svg';
import python from '../../assets/svgs/python.svg';
import react from '../../assets/svgs/react.svg';
import vite from '../../assets/svgs/vite.svg';
import tailwind from '../../assets/svgs/tailwind.svg';

const skills = [
    {
        title: "React",
        icon: <img src={react}/>,
        skills: ["Hooks", "Redux", "Context API"]
    },
    {
        title: "tailwind",
        icon:  <img src={tailwind}/>,
        skills: ["Flexbox", "Grid Layout"]
    },
    {
        title: "JavaScript",
        icon: <img src={js}/>,
        skills: ["ES6+", "DOM Manipulation"]
    },
    {
        title: "Java",
        icon: <img src={java}/>,
        skills: ["OOP", "Spring Boot"]
    },
    {
        title: "Python",
        icon: <img src={python}/>,
        skills: ["Django", "Data Analysis"]
    },
    {
        title: "Git",
        icon: <img src={git} className=''/>,
        skills: ["Version Control", "GitHub"]
    },
    {
        title: "nodejs",
        icon:  <img src={nodejs}/>,
        skills: ["Flexbox", "Grid Layout"]
    }, 
    {
        title: "vs-code",
        icon:  <img src={vsCode}/>,
        skills: ["Flexbox", "Grid Layout"]
    }, 
    {
        title: "cpp",
        icon:  <img src={cpp}/>,
        skills: ["Flexbox", "Grid Layout"]
    }, 
    {
        title: "html",
        icon:  <img src={html}/>,
        skills: ["Flexbox", "Grid Layout"]
    }, 
    {
        title: "mysql",
        icon:  <img src={mysql}/>,
        skills: ["Flexbox", "Grid Layout"]
    }, 
    {
        title: 'vite', 
        icon: <img src={vite} />
    }
];

const Skills = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, 
        threshold: 0.3,
    });

    useEffect(() => {
        if(inView){
            const items = document.querySelectorAll('.skill-item');

            items.forEach((item, index) => {
                item.style.transitionDelay = `${index * 0.1}s`;
                item.classList.add('animate-slide-in')
            })
        }
    }, [inView])

    return (
        <div
            id="skills"
            className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
        >
            <div className="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                        <span className="border-b-4 border-blue-500 border-relative uppercase">
                            Skills
                        </span>
                    </span>
                </h2>
            </div>
            <div className="grid grid-cols-2 gap-8 row-gap-8 lg:grid-cols-3 rounded-lg shadow-lg">
                {skills.map((skill, index) => (
                    <motion.div 
                        key={index} 
                        className="text-center skill-item"
                        initial={{ opacity: 0, x : -50}}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: index * 0.1}}
                    >
                            <div className="flex items-center hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-xl justify-center w-16 h-16 mb-4 mx-auto sm:h-auto">
                                {skill.icon}
                            </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Skills;
