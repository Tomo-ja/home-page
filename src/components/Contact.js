import React from 'react'
import SectionHeader from './SectionHeader'
import Header from './Header'
import headerBgImg from '../images/bg_welcomeHeader.jpg'

export default function Contact() {
  return (
	<section id='contact' className='contact'>
		<SectionHeader 
			bgImg={headerBgImg}
			content={<Header title="Contact" subTitle="Hey Hi!" />}
		/>
	</section>
  )
}
