import React, { useEffect, useState } from 'react'
import { Link,useLocation } from 'react-router-dom'
import { Reorder } from '@mui/icons-material'
import "./Navbar.css"
function Navbar() {
  const [expandNavbar, setExpandNavbar]=useState(false)
  const location=useLocation()

  useEffect(()=>{
setExpandNavbar(false)
  },[location])
  return (
    
    <div className='navbar' id={expandNavbar ? "open":"close"}>
      <div className='toggleButton'>
        <button onClick={()=>{setExpandNavbar((prev)=> !prev)}}>
       <Reorder/>
        </button>
      </div>
      <div className='links'>
        <Link to="/" className='homes'>Home</Link>
        <Link to="/projects" className='proje' >Projects</Link>
        <Link to="/experience" className='exp'>Experience</Link>
      </div>
    </div>
  )
}

export default Navbar
