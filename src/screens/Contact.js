import React, { useRef } from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {

  const email = useRef();

  function clickHandler(e){
    navigator.clipboard.writeText(email.current.innerText);
    e.target.innerText = "Copied"
    setTimeout(()=>{
      e.target.innerText = "Copy"
    },500)
  }

  return (
    <div className='p-4 shadow-md mt-6 rounded-xl font-sans'>
      <h1 className=' text-4xl font-bold mb-4 '>Contact</h1>
      <div className='shadow-md rounded-xl p-3 flex flex-col items-center'>
        <p className='text-2xl font-bold mb-3'>Email:</p>
        <div className='flex gap-2 bg-gray-300 px-5 py-1 rounded-md justify-center items-center'>
          <p ref={email}>jinuvijayan01@gmail.com</p>
          <button onClick={clickHandler} className='bg-blue-700 px-3 py-1 rounded-sm text-white '>Copy</button>
        </div>
      </div>
      <div className='shadow-md rounded-xl p-3 flex flex-col items-center mt-10'>
        <p className='text-2xl font-bold mb-3'>Socials:</p>

        <div className = "flex gap-2.5 justify-center text-4xl ">
          <a href = "https://github.com/Jinu-Vijayan" target="_blank"><FaGithub /></a>
          <a href= "https://www.linkedin.com/in/jinu-vijayan-a3041b15a/" target= "_blank"><FaLinkedin /></a>
        </div>
      </div>
    </div>
  )
}

export default Contact