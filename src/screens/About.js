import React from 'react'

const About = () => {
  return (
    <div className='p-4 shadow-md mt-6 rounded-xl font-sans' style={{
      backgroundColor : "#1d618c"
    }}>
      <h1 className=' text-4xl font-bold mb-4 '>About Me</h1>
      <div className='flex flex-col items-center p-4 shadow-md rounded-lg mb-12 ' style={{
      backgroundColor : "#627d8d"
    }}>
        <p>Hello there!👋</p>
        <p>I am Jinu Vijayan, a frontend developer from Kerala, India. With a passion for crafting user-friendly and visually appealing interfaces, I have honed my skills in frontend development.As a frontend developer, I have a strong foundation in HTML, CSS, and JavaScript.I am well-versed in React, and have extensive experience in building scalable and maintainable applications using React</p>
        {/* <p>I am a Frontend Developer</p> */}
      </div>
      <div className='flex flex-col items-center' >
        <h2 className='text-3xl font-bold mb-2'>Languages</h2>
        <div className='flex justify-around gap-8 w-full shadow-md rounded-md p-8' style={{
      backgroundColor : "#627d8d"
    }}>
          <div>
            <h3 className='font-bold text-lg '>Coding Languages</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Java</li>
              <li>React</li>
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