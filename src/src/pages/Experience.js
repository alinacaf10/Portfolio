import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { School,Work,AccountBalance } from '@mui/icons-material';
import "./Experience.css"
function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimeline></VerticalTimeline>
        <VerticalTimelineElement className='vertical-timeline-element--education' date='2018-2022'
        iconStyle={{background: "#3e497a", color:"#fff"}}
        icon={<School/>}>
          <h2>University</h2>
          <h3>Azerbaijan State Oil and Industry University (ASOIU) </h3>
          <h2>Information Technology</h2>
          <p>Bachelor Degree</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education' date='2018-Now'
        iconStyle={{background: "#d2e245", color:"#3e497a"}}
        icon={<Work/>}>
          <h2>Work Experience</h2>
          <h3>Agency of Azerbaijan Automobile Roads (AAYDA)</h3>
          <h2>Technician</h2>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education' date='2022 February-May'
        iconStyle={{background: "#61d0e4", color:"#fff"}}
        icon={<AccountBalance/>}>
          <h2>Course Experience</h2>
          <h3>Algoritmika Course
</h3>
<h2>BootCamp Azerbaijan 2022</h2>
          <p>Front-end Developers</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education' date='2018-2022'
        iconStyle={{background: "#783e7a", color:"#fff"}}
        icon={<School/>}>
          <h2>Master Education</h2>
          <h3>Azerbaijan Technical University(AZTU) </h3>
          <h2>Software</h2>
          <p>Master Degree</p>
        </VerticalTimelineElement>
     
  
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<AccountBalance />}
  />
</VerticalTimeline>
    </div>
  )
}

export default Experience
