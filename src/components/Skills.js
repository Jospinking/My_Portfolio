import React from 'react'
import javascript from '../assets/javascript.png';
import Flutter from '../assets/flutter.png';
import java from '../assets/java.png';
import react from '../assets/react.png';
import azure from '../assets/azure.png';
import github from '../assets/github.png';
import git from '../assets/Git.png';
import graphQl from '../assets/GraphQL.png';
import intro_mobile from '../assets/Intro_to_mobile_app.pdf';
import intro_databases from '../assets/Intro_to_Databases_Meta.pdf';
import AWS_udemy from '../assets/AWS_udemy.pdf';




const Skills = () => {    
  return (
    <div name='skills'className='w-full bg-[#0a192f] text-gray-300'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-20'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Certifications</p>
                <p className='py-4'>Udemy: <a  target={"_blank"} rel="noopener noreferrer" href={AWS_udemy}><u>Ultimate AWS Certified Cloud Practitioner CLF-C02</u></a></p>
                <p className='py-4'>Introduction to Databases: <a target={"_blank"} rel="noopener noreferrer" href={intro_databases}><u>Meta Introduction to Database Engineer</u></a></p>
                <p className='py-4'>Introduction to IOS Mobile Application Development: <a target={"_blank"} rel="noopener noreferrer" href={intro_mobile}><u>Meta Introduction to iOS Mobile Application Development</u></a></p>

            </div>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                <p className='py-4'>These are the technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={javascript} alt ="javaScript icon"/>
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={react} alt ="react icon"/>
                    <p className='my-4'>React.js</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Flutter} alt ="flutter icon"/>
                    <p className='my-4'>Dart/Flutter</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={java} alt ="java icon"/>
                    <p className='my-4'>Java</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={graphQl} alt ="graphQl icon"/>
                    <p className='my-4'>GraphQL</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={azure} alt ="azure icon"/>
                    <p className='my-4'>Azure DevOps</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={github} alt ="github icon"/>
                    <p className='my-4'>GitHub</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={git} alt ="git icon"/>
                    <p className='my-4'>Git</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills