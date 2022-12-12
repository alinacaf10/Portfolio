import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, I'm Ali Nacafov</h2>
        <div className="prompt">
          <p>A software developer with passion for learning and creating.</p>
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>ReactJS, Redux, HTML, CSS, JavaScript,BootStrap, MaterialUI </span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span>Java SE, MySQL, MS SQL</span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>JavaScript, Java</span>
          </li>
        </ol>
      </div>
      
    </div>
  )
}

export default Home
