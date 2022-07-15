import React from 'react'
import githubIcon from '../images/icon_github.svg'
import linkedinIcon from '../images/icon_linkedin.svg'

export default function Header() {
  return (
	<div id='welcome' className='header'>
		<div className="inner">
			<h1 className='header__name'>Tomonao Hashiguchi</h1>
			<p className="header__jobTitle">Web developer</p>
			<div className="header__iconBox">
				<a href='https://www.linkedin.com/in/tomonao-hashiguchi-6a0783245/'>
					<img className='header__iconBox__item' src={linkedinIcon} alt='linked in icon' />
				</a>
				<a href='https://github.com/Tomo-ja'>
					<img className='header__iconBox__item' src={githubIcon} alt='github icon' />
				</a>
			</div>
		</div>
	</div>
  )
}
