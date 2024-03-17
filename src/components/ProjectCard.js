import React from 'react'

const ProjectCard = ({thumbnail, tech_stack, name , hosted_link, git_repo}) => {
  return (
    <div className='flex flex-col items-center w-[45%] rounded-xl shadow-md p-3 '>
        <img src={thumbnail}/>
        <p className='text-gray-500'>Tech stack: {tech_stack}</p>
        <p>Project name: {name}</p>
        <div className='flex flex-col items-center gap-2 mt-4'>
            <a href={hosted_link} target='_blank'><button className='rounded-full  bg-blue-800 text-white px-3'>Preview site</button></a>
            <a href={git_repo} target='_blank w-full'><button className='rounded-full  bg-blue-800 text-white px-3 '>Git Repo</button></a>
        </div>
    </div>
  )
}

export default ProjectCard