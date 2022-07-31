import React from 'react'
import SectionHeader from './SectionHeader'
import Header from './Header'
import headerBgImg from '../images/bg_welcomeHeader.jpg'

export default function AboutMe() {
  return (
	<section id='about'>
		<SectionHeader 
			bgImg={headerBgImg}
			content={<Header title="About Me" subTitle="Who I am" />} 
		/>
		<div className="inner">
			<div className="about__me">

			</div>
			<div className="about__rubeField">

			</div>
		</div>
	</section>
  )
}
