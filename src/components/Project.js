import React from 'react'
import githubIcon from '../images/icon_github.svg'
import exportIcon from '../images/icon_export.svg'

// projectData { name, img, description, usedSkills, githubUrl, productUrl}
export default function Project({projectData}) {

  return (
	<div className='project'>
		<div className="project__imgContainer">
			<img 
				className='project__imgContainer__img'
				src={projectData.img} 
				alt="project preview"
			/>
		</div>
		<div className="project__explain">
			<h3 className='project__explain__name'>{projectData.name}</h3>
			<div className='project__separator'></div>
			<ul className='project__explain__skills'>
				{projectData.usedSkills.map( skill => (
					<li className='project__explain__skill'>{ skill }</li>
				))}
			</ul>
			<div className="project__explain__description">
				{projectData.description}
			</div>
			<div className="project__explain__iconBox">
			<a href={projectData.githubUrl}>
				<img className='project__explain__iconBox__item' src={githubIcon} alt='github icon' />
			</a>
			<a href={projectData.productUrl}>
				<img className='project__explain__iconBox__item' src={exportIcon} alt='export icon' />
			</a>
		</div>
		</div>
	</div>
  )
}
