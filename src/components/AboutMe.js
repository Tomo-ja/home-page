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

	</section>
  )
}
