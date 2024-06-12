import React from 'react'
import pokedex_thumbnail from '../assets/images/pokedex_thumbnail.png'
import stop_watch_thumbnail from '../assets/images/stop_watch_thumpnail.png'
import grocery_bud_thumbnail from "../assets/images/grocery_bud_thumbnail.png"
import weather_app_thumpnail from '../assets/images/weather_app_thumpnail.png'
import ecommerse_app_thumpnail from '../assets/images/ecommerse_app_thumpnail.png'
import movie_app_thumpnail from '../assets/images/movie_app_thumpnail.png'
import budget_planner_thumpnail from '../assets/images/budget_planner_thumbnail.png'
import text_utils_thumpnail from '../assets/images/text_utils_thumpnail.png'
import ProjectCard from '../components/ProjectCard';

const projectData = [
  {
    project_name : "Pokedex",
    hosted_link : "https://jinu-vijayan.github.io/pokedex/",
    git_repo_link : "https://github.com/Jinu-Vijayan/pokedex",
    thumbnail : pokedex_thumbnail,
    tech_stack : "HTML | CSS | JS",
    desc : "A web application developed with HTML5, CSS3, JavaScript, and API integration for exploring Pokémon data."
  },
  {
    project_name : "Stop Watch",
    hosted_link : " https://jinu-vijayan.github.io/stop_watch/",
    git_repo_link : "https://github.com/Jinu-Vijayan/stop_watch/",
    thumbnail : stop_watch_thumbnail,
    tech_stack : "HTML | CSS | JS",
    desc : "A simple stop watch application built using HTML5, CSS3, and JavaScript."
  },
  {
    project_name : "Grocery bud",
    hosted_link : "https://tranquil-medovik-846758.netlify.app/",
    git_repo_link : "https://github.com/Jinu-Vijayan/grocery_bud ",
    thumbnail : grocery_bud_thumbnail,
    tech_stack : "HTML | CSS | JS| React",
    desc : "A web application built using HTML5, CSS3,JavaScript and React to keep track of groceries to buy."
  },
  {
    project_name : "Movie app",
    hosted_link : "https://tangerine-bublanina-5be269.netlify.app/",
    git_repo_link : "https://github.com/Jinu-Vijayan/movie-app/tree/main",
    thumbnail : movie_app_thumpnail,
    tech_stack : "HTML | CSS | JS| React",
    desc : "A web application built using HTML5, CSS3, JavaScript, React and API integration to see latest movie trends."
  },
  {
    project_name : "Weather App",
    hosted_link : "https://serene-peony-439364.netlify.app/",
    git_repo_link : "https://github.com/Jinu-Vijayan/weather_app ",
    thumbnail : weather_app_thumpnail,
    tech_stack : "HTML | CSS | JS| React",
    desc : "A web application built using HTML5, CSS3, JavaScript, React and API integration to see the weather data of specified places."
  },
  {
    project_name : "Basic ecommerse app",
    hosted_link : "https://dapper-elf-57b976.netlify.app/",
    git_repo_link : "https://github.com/Jinu-Vijayan/basic_ecommers_app ",
    thumbnail : ecommerse_app_thumpnail,
    tech_stack : "HTML | CSS | JS| React",
    desc : "A web application built using HTML5, CSS3, JavaScript, and React for ecommerse purpose."
  },
  {
    project_name : "Budget planner",
    hosted_link : "https://dainty-kitten-04f074.netlify.app/",
    git_repo_link : "https://github.com/Jinu-Vijayan/budget_planner ",
    thumbnail : budget_planner_thumpnail,
    tech_stack : "HTML | CSS | JS| React",
    desc : "A web application built using HTML5, CSS3, JavaScript, and React for budget planning."
  },
  {
    project_name : "Text Utils",
    hosted_link : "https://stately-kitten-8c5d17.netlify.app/",
    git_repo_link : "https://github.com/Jinu-Vijayan/text_utils ",
    thumbnail : text_utils_thumpnail,
    tech_stack : "HTML | CSS | JS| React",
    desc : "A web application built using HTML5, CSS3, JavaScript, and React for performing operations on text."
  },
];

const Projects = () => {
  return (
    <div className='p-4 shadow-md mt-6 rounded-xl font-sans' style={{
      backgroundColor : "#1d618c"
    }}>
      <h1 className=' text-4xl font-bold mb-4 '>Projects </h1>
      <div className='flex flex-wrap gap-5 items-center justify-center' >
        {
          projectData.map((elem,index)=>{
            return <ProjectCard key={index} thumbnail = {elem.thumbnail} tech_stack = {elem.tech_stack} name = {elem.project_name} hosted_link = {elem.hosted_link} git_repo = {elem.git_repo_link} desc = {elem.desc} />
          })
        }
      </div>
    </div>
  )
}

export default Projects