import React from 'react'

const ProjectCard = ({thumbnail, tech_stack, name , hosted_link, git_repo, desc}) => {

  const btnStyle = {
    backgroundColor : "black",
    width : "100%",
    fontSize : "1.1rem",
    color : "#d4af37",
    fontWeight : "bold"
  }
  return (
    <div className='flex flex-col items-center w-[45%] rounded-xl shadow-md p-3 ' style={{
      backgroundColor : "#627d8d"
    }}>
        <img src={thumbnail}/>
        
        <p>Project name: {name}</p>
        <p style={{
          color : "#e9d8d8",
          textAlign : "center"
        }}>{desc}</p>
        <p style={{
          color: "#ededed"
        }}>Tech stack: {tech_stack}</p>
        <div className='flex flex-col gap-2 mt-1' style={{
          width : "100%"
        }}>
            <a href={hosted_link} target='_blank'><button className='rounded-full  text-white px-3 ' style={btnStyle}>Preview </button></a>
            <a href={git_repo} target='_blank w-full'><button className='rounded-full  text-white px-3 'style={btnStyle}>Git Repo</button></a>
        </div>
    </div>
  )
}

export default ProjectCard