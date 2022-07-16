import React from 'react'
import SectionHeader from './SectionHeader'
import WelcomeHeader from './WelcomeHeader'

import headerBgImg from '../images/bg_welcomeHeader.jpg'

export default function Welcome() {
  return (
	<div id='welcome' className=''>
		<SectionHeader bgImg={headerBgImg} content={<WelcomeHeader />} />
	</div>
  )
}
