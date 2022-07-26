import React from 'react'
import SectionHeader from './SectionHeader'
import Header from './Header'
import Project from './Project'
import headerBgImg from '../images/bg_welcomeHeader.jpg'
import projectData from '../Data/projectData'


export default function Expertise() {
	
  return (
	<section id='expertise'>
		<SectionHeader 
			bgImg={headerBgImg}
			content={<Header title="Skills" subTitle="What I excel in" />}
		/>
		<div className="inner">
			{ projectData.map( project => {
				return <Project projectData={project} />
			})}
		</div>
	</section>
  )
}
