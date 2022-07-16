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
		<div className="inner">
			<div className="contact__formBox">
				<form className='contact__form'>
					<div className='contact__form__group'>
						<input 
							type="text" 
							className='contact__form__input'
							id='guestName'
							required 
						/>
						<span className='contact__form__border'></span>
						<label for="guestName" className='contact__form__label'>How can I call you?</label>
					</div>
					<div className='contact__form__group'>
						<input 
							type="text" 
							className='contact__form__input'
							id='guestEmail'
							required 
						/>
						<span className='contact__form__border'></span>
						<label for="guestEmail" className='contact__form__label'>What's your email address?</label>
					</div>
					<div className='contact__form__group'>
						<textarea 
							id='message'
							className='contact__form__input'
							rows="6"
							required
						/>
						<span className='contact__form__border'></span>
						<label for="message" className='contact__form__label'>What's your message?</label>
					</div>
					<input type="submit" value="Send!" />
				</form>
			</div>
		</div>
	</section>
  )
}
