import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div name ='home' className='w-full h-screen bg-[#0a192f]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full' >
            <p className='text-pink-600'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Jospin Kingombe</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I am a Software Developer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I graduated from Washington State University with a bachelor's degree in computer science in 2021.
            My core competencies include web and mobile user interface development, 
            front-end and back-end integration, and code optimization and testing.
            In my most recent role as a software developer at General Motors, I designed and developed the user interface of a brand ambassador portal, using React.js and Java Quarkus technologies.
            I ensured an intuitive and responsive user experience, integrated the front-end seamlessly with the back-end using REST APIs, and conducted code reviews and performance optimization. 
            I also successfully integrated the portal with a WeChat mini program and a Flutter mobile app, expanding our reach to a vast audience and improving member engagement. 
            I enjoy working with diverse and cross-functional teams, contributing to innovative and impactful projects, and learning new skills and technologies.
            </p>
            {/* <div>
                <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                    View Work <HiArrowNarrowRight className='ml-3'/>
                </button>

            </div> */}
        </div>

    </div>
  )
}

export default Home