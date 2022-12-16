import React from 'react'
import ProjectItem from '../comps/ProjectItem'
import Calculator from "../IMG/Calculator.png"
import "./Projects.css"
function Projects() {
  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>
      <div className='projecList'>
        <ProjectItem name="React Calculator" image={Calculator}/>
        <ProjectItem/>

      </div>
    </div>
  )
}

export default Projects
