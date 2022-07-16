import React from 'react'

export default function Header({title, subTitle}) {

  return (
	<>
		<h2 className='sectionHeader__title'>{title}</h2>
		<p className='sectionHeader__subTitle'>{subTitle}</p>

	</>
  )
}
