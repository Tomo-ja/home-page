import React from 'react'
import profileImage from '../images/img_profile.jpg'

export default function Navbar() {
  return (
	<nav className='navbar'>
		<div className="navbar__photoBox">
			<img 
				className="navbar__photoBox__img" 
				src={profileImage} 
				alt="profile" 
			/>
		</div>
		<ul className='navbar__list'>
			<li className="navbar__list__item"><a href='#welcome'>welcome</a></li>
			<li className="navbar__list__item"><a href='#about'>about</a></li>
			<li className="navbar__list__item"><a href='#expertise'>expertise</a></li>
			<li className="navbar__list__item"><a href='#contact'>contact</a></li>
		</ul>
	</nav>
  )
}
