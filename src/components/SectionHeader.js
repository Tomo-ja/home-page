import React from 'react'

export default function SectionHeader({ bgImg, content }) {

	let style = {backgroundImage: `url(${bgImg})`}
  return (
	<div className='sectionHeader' style={style}>
		<div className="inner">
			{content}
		</div>
	</div>
  )
}
