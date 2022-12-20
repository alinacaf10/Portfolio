import React from 'react'
import { useParams } from 'react-router-dom'
import { projecList } from '../helpers/ProjectList'
import { GitHub } from '@mui/icons-material'
import "./ProjectDisplay.css"
function ProjectDisplay() {
    const {id}=useParams();
    const project=projecList[id]
  return (
    <div className='project'>
        <h1>{project.name}</h1>
        <img src={project.image}/>
        <h3>Skills: {project.skills}</h3>
        <GitHub/>
    </div>
  )
}

export default ProjectDisplay