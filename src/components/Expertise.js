import React from 'react'
import SectionHeader from './SectionHeader'
import Header from './Header'
import headerBgImg from '../images/bg_welcomeHeader.jpg'


export default function Expertise() {
  return (
	<section id='expertise'>
		<SectionHeader 
			bgImg={headerBgImg}
			content={<Header title="Skills" subTitle="What I excel in" />}
		/>

	</section>
  )
}
