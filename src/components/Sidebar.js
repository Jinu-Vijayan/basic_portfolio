import React from 'react'
import profile_pic from '../assets/images/profile_pic.jpeg'
import { IoHourglassOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import PersonalDetailsCard from './PersonalDetailsCard.js'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const detailsCardData = [
  {
    icon : <IoHourglassOutline className = "text-yellow-200"/>,
    title : "Age",
    data : "25 years old"
  },
  {
    icon : <FaLocationDot className = "text-emerald-200" />,
    title : "Location",
    data : "Kerala, India"
  }
]

const Sidebar = () => {
  return (
    <div className=' w-8/12 p-6 rounded-xl shadow-xl flex flex-col items-center justify-center '>
      <img src={profile_pic} alt='profile picture' className = 'w-32 rounded-xl '/>
      <p className=' text-center mb-6  '>Jinu Vijayan</p>
      {/* <br className=' border-black border-2 '/> */}
      <div className='divide-y-4 divide-black'></div>
      <div className='mb-3.5  '>
        {
          detailsCardData.map((elem,index)=>{
            return(
              <PersonalDetailsCard icon = {elem.icon} title = {elem.title} data = {elem.data} />
            )
          })
        }
      </div>
      <div className = "flex gap-2.5 justify-center text-2xl ">
        <a href = "https://github.com/Jinu-Vijayan" target="_blank"><FaGithub /></a>
        <a href= "https://www.linkedin.com/in/jinu-vijayan-a3041b15a/" target= "_blank"><FaLinkedin /></a>
      </div>
    </div>
  )
}

export default Sidebar