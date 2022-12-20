import React from 'react'
import ProjectItem from '../comps/ProjectItem'

import "./Projects.css"
import { projecList } from '../helpers/ProjectList'
function Projects() {
  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>
      <div className='projecList'>
        {projecList.map((project, idx) => {
          return <ProjectItem id={idx} name={project.name} image={project.image} />
        })}
      </div>
    </div>
  )
}

export default Projects
