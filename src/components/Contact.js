import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import SectionHeader from './SectionHeader'
import Header from './Header'
import headerBgImg from '../images/bg_welcomeHeader.jpg'
import emailSendIcon from '../images/icon_email-send.svg'

export default function Contact() {

	const [errors, setErrors] = useState({nameError: true, emailError: true, messageError: true})
	const [emailInfo, setEmailInfo] = useState({name: null, email: null, message: null})

	function isValidEmail(email){
		return /\S+@\S+\.\S+/.test(email)
	}

	function changeName(e){
		if (e.target.value.trim() === "") {
			setErrors(prev =>  {return {...prev, nameError: true}})
		} else {
			setErrors(prev =>  {return {...prev, nameError: false}})
		}
		setEmailInfo(prev => {return {...prev, name: e.target.value}})
	}
	function changeEmail(e){
		if (e.target.value.trim() === "") {
			setErrors(prev =>  {return {...prev, emailError: true}})
		} else if (!isValidEmail(e.target.value)) {
			setErrors(prev =>  {return {...prev, emailError: true}})
		} else {
			setErrors(prev =>  {return {...prev, emailError: false}})
		}
		setEmailInfo(prev => {return {...prev, email: e.target.value}})
	}
	function changeMessage(e){
		if (e.target.value.trim() === "") {
			setErrors(prev =>  {return {...prev, messageError: true}})
		} else {
			setErrors(prev =>  {return {...prev, messageError: false}})
		}
		setEmailInfo(prev => {return {...prev, message: e.target.value}})
	}
	function sendEmail(e){
		e.preventDefault()

		emailjs.send("service_z2xo4ga", "template_q7ukh3j", emailInfo, "k8tCtYZttijiK5X3L").then(function(response){
			console.log('success')
		}, function(error){
			console.log("something wrong", error)
		})
	}

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
							onChange={changeName}
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
							onChange={changeEmail}
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
							onChange={changeMessage}
							required
						/>
						<span className='contact__form__border'></span>
						<label for="message" className='contact__form__label'>What's your message?</label>
					</div>
					<button 
						className='contact__form__button'
						disabled={!Object.values(errors).every(value => value !== true)}
						onClick={sendEmail}
					>
						<img 
							src={emailSendIcon} 
							alt="paper craft icon"
							className='contact__form__button__icon'
						/>
						<span className='contact__form__button__text'>Send</span>
					</button>
				</form>
			</div>
		</div>
	</section>
  )
}
