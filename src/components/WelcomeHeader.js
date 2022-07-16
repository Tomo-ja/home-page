import React from 'react'
import Header from './Header'
import githubIcon from '../images/icon_github.svg'
import linkedinIcon from '../images/icon_linkedin.svg'

export default function WelcomeHeader() {
  return (
	<div className='welcome__header'>
		<h1 className='sectionHeader__title'>Tomonao Hashiguchi</h1>
		<p className="sectionHeader__subTitle welcome__header__subTitle">Web developer</p>
		<div className="welcome__header__iconBox">
			<a href='https://www.linkedin.com/in/tomonao-hashiguchi-6a0783245/'>
				<img className='welcome__header__iconBox__item' src={linkedinIcon} alt='linked in icon' />
			</a>
			<a href='https://github.com/Tomo-ja'>
				<img className='welcome__header__iconBox__item' src={githubIcon} alt='github icon' />
			</a>
		</div>
	</div>
  )
}
