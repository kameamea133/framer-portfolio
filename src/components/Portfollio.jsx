import React from 'react';
import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"

import { AiFillGithub, AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal';

const projects = [
    {
      img: project1,
      title: "savorySecrets",
      description: "A full stack recipe application built with the MERN stack..",
      links: {
        site: "https://mern-recipe-app-frontend-steel.vercel.app/",
        github: "https://github.com/kameamea133/mern-recipe-app-frontend",
      },
    },
    {
      img: project2,
      title: "MyMoviz",
      description: "A movie application built with React.",
      links: {
        site: "https://mymoviz-frontend-six.vercel.app/",
        github: "https://github.com/kameamea133/mymoviz-frontend",
      },
    },
    {
      img: project2,
      title: "Project #3",
      description: "An e-commerce platform with various features.",
      links: {
        site: "#",
        github: "#",
      },
    },
    
   
  ]

const Portfolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
        <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portfolio</h2>
        {projects.map((project, index) => (
            <Reveal key={index}>
            <div  
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                <div className='w-full md:w-1/2 p-4'>
                    <img
                        src={project.img}
                        alt={project.title}
                        className='w-full h-full object-cover rounded-lg shadow-lg'
                    />
                </div>
                <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                    <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                    <p className='text-gray-300 mb-4'>{project.description}</p>
                    <div className='flex space-x-4'>
                        <a href={project.links.site}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            View Site
                        </a>
                        <a href={project.links.github}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            <AiOutlineGithub/>
                        </a>

                    </div>

                </div>

            </div>
            </Reveal>
        ))}
        
    </div>
  )
}

export default Portfolio