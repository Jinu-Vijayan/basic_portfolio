import React from 'react'
import ProgressBar from '../components/ProgressBar'

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
      </div>
      <div className='flex flex-col items-center' >
        <h2 className='text-3xl font-bold mb-2'>Languages</h2>
        <div className='flex justify-around gap-8 w-full shadow-md rounded-md p-8' style={{
      backgroundColor : "#627d8d"
    }}>
          <div style={{
            width : "50%"
          }}>
            <h3 className='font-bold text-lg '>Coding Languages</h3>
            <ul>
              <li>HTML <span style={{
                color: "#dedede"
              }}>90%</span></li>
              <ProgressBar prog={"90%"}/>
              <li>CSS <span style={{
                color: "#dedede"
              }}>90%</span></li>
              <ProgressBar prog={"90%"}/>
              <li>JavaScript <span style={{
                color: "#dedede"
              }}>85%</span></li>
              <ProgressBar prog={"85%"}/>
              <li>React <span style={{
                color: "#dedede"
              }}>80%</span></li>
              <ProgressBar prog={"80%"}/>
              <li>Java <span style={{
                color: "#dedede"
              }}>60%</span></li>
              <ProgressBar prog={"60%"}/>
            </ul>
          </div>
          <div style={{
            width : "50%"
          }}>
            <h3 className="font-bold text-lg">Human Languages</h3>
            <ul>
              <li>English <span style={{
                color: "#dedede"
              }}>90%</span></li>
              <ProgressBar prog={"90%"}/>
              <li>Malayalam <span style={{
                color: "#dedede"
              }}>95%</span></li>
              <ProgressBar prog={"95%"}/>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About