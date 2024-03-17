import React from 'react'

const About = () => {
  return (
    <div className='p-4 shadow-md mt-6 rounded-xl font-sans'>
      <h1 className=' text-4xl font-bold mb-4 '>About Me</h1>
      <div className='flex flex-col items-center p-4 shadow-md rounded-lg mb-12 '>
        <p>Hello there!</p>
        <p>I am Jinu Vijayan, I am from Kerala India</p>
        <p>I am a Frontend Developer</p>
      </div>
      <div className='flex flex-col items-center'>
        <h2 className='text-3xl font-bold'>Languages</h2>
        <div className='flex justify-around gap-8 w-full shadow-md rounded-md p-8'>
          <div>
            <h3 className='font-bold text-lg '>Coding Languages</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Java</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg">Human Languages</h3>
            <ul>
              <li>English</li>
              <li>Malayalam</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About