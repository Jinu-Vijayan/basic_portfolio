import React from 'react'
import pokedex_thumbnail from '../assets/images/pokedex_thumbnail.png'
import stop_watch_thumbnail from '../assets/images/stop_watch_thumpnail.png'
import grocery_bud_thumbnail from "../assets/images/grocery_bud_thumbnail.png"
import ProjectCard from '../components/ProjectCard';

const projectData = [
  {
    project_name : "Pokedex",
    hosted_link : "https://jinu-vijayan.github.io/pokedex/",
    git_repo_link : "https://github.com/Jinu-Vijayan/pokedex",
    thumbnail : pokedex_thumbnail,
    tech_stack : "HTML | CSS | JS"
  },
  {
    project_name : "Stop Watch",
    hosted_link : "https://github.com/Jinu-Vijayan/stop_watch/",
    git_repo_link : "https://jinu-vijayan.github.io/stop_watch/",
    thumbnail : stop_watch_thumbnail,
    tech_stack : "HTML | CSS | JS"
  },
  {
    project_name : "Grocery bud",
    hosted_link : "https://github.com/Jinu-Vijayan/grocery_bud",
    git_repo_link : "https://tranquil-medovik-846758.netlify.app/",
    thumbnail : grocery_bud_thumbnail,
    tech_stack : "HTML | CSS | JS| React"
  },
];

const Projects = () => {
  return (
    <div className='p-4 shadow-md mt-6 rounded-xl font-sans'>
      <h1 className=' text-4xl font-bold mb-4 '>Projects </h1>
      <div className='flex flex-wrap gap-5 items-center justify-center'>
        {
          projectData.map((elem,index)=>{
            return <ProjectCard key={index} thumbnail = {elem.thumbnail} tech_stack = {elem.tech_stack} name = {elem.project_name} hosted_link = {elem.hosted_link} git_repo = {elem.git_repo_link} />
          })
        }
      </div>
    </div>
  )
}

export default Projects