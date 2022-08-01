import React, {useState, useCallback, useEffect, useRef } from 'react'


export default function Cube() {

	const [angle, setAngle] = useState([-40, 50])
	const startPoint = useRef([0, 0])
	const dragging = useRef(false)

	let angleStyle = {transform: `rotateX(${angle[0]}deg) rotateY(${angle[1]}deg)`}

	const mouseMove = useCallback((e) => {
		if (dragging.current) {
			setAngle(prev => ([
				prev[0] - (e.pageY - startPoint.current[0]) / 100,
				prev[1] + (e.pageX - startPoint.current[1]) / 100
			]))
		}
	})
	const mouseDown = useCallback((e) => {
		startPoint.current[0] = e.pageY
		startPoint.current[1] = e.pageX
		dragging.current = true
	}, [])

	const mouseUp = useCallback((e) => {
		dragging.current = false
	}, [])

	useEffect(() => {
		window.addEventListener('mousedown', mouseDown)
		window.addEventListener('mouseup', mouseUp)
		window.addEventListener('mousemove', mouseMove)
		return () => {
			window.removeEventListener('mousedown', mouseDown)
			window.removeEventListener('mouseup', mouseUp)
			window.removeEventListener('mousemove', mouseMove)
		}
	}, [mouseDown, mouseMove, mouseUp])

  return (
	<div className='cube' style={angleStyle}>
		<div className='box'>
			<div className="box_face box_face-bottom">
				<div className="box_face_color" style={{backgroundColor: "blue"}}></div>
			</div>
			<div className="box_face box_face-front">
				<div className="box_face_color" style={{backgroundColor: "black"}}></div>
			</div>
			<div className="box_face box_face-back">
				<div className="box_face_color" style={{backgroundColor: "yellow"}}></div>
			</div>
			<div className="box_face box_face-left">
				<div className="box_face_color" style={{backgroundColor: "orange"}}></div>
			</div>
			<div className="box_face box_face-right">
				<div className="box_face_color" style={{backgroundColor: "green"}}></div>
			</div>
			<div className="box_face box_face-top">
				<div className="box_face_color" style={{backgroundColor: "red"}}></div>
			</div>
		</div>
		<div className='box'>
			<div className="box_face box_face-bottom">
				<div className="box_face_color" style={{backgroundColor: "blue"}}></div>
			</div>
			<div className="box_face box_face-front">
				<div className="box_face_color" style={{backgroundColor: "black"}}></div>
			</div>
			<div className="box_face box_face-back">
				<div className="box_face_color" style={{backgroundColor: "yellow"}}></div>
			</div>
			<div className="box_face box_face-left">
				<div className="box_face_color" style={{backgroundColor: "orange"}}></div>
			</div>
			<div className="box_face box_face-right">
				<div className="box_face_color" style={{backgroundColor: "green"}}></div>
			</div>
			<div className="box_face box_face-top">
				<div className="box_face_color" style={{backgroundColor: "red"}}></div>
			</div>
		</div>		<div className='box'>
			<div className="box_face box_face-bottom">
				<div className="box_face_color" style={{backgroundColor: "blue"}}></div>
			</div>
			<div className="box_face box_face-front">
				<div className="box_face_color" style={{backgroundColor: "black"}}></div>
			</div>
			<div className="box_face box_face-back">
				<div className="box_face_color" style={{backgroundColor: "yellow"}}></div>
			</div>
			<div className="box_face box_face-left">
				<div className="box_face_color" style={{backgroundColor: "orange"}}></div>
			</div>
			<div className="box_face box_face-right">
				<div className="box_face_color" style={{backgroundColor: "green"}}></div>
			</div>
			<div className="box_face box_face-top">
				<div className="box_face_color" style={{backgroundColor: "red"}}></div>
			</div>
		</div>		<div className='box'>
			<div className="box_face box_face-bottom">
				<div className="box_face_color" style={{backgroundColor: "blue"}}></div>
			</div>
			<div className="box_face box_face-front">
				<div className="box_face_color" style={{backgroundColor: "black"}}></div>
			</div>
			<div className="box_face box_face-back">
				<div className="box_face_color" style={{backgroundColor: "yellow"}}></div>
			</div>
			<div className="box_face box_face-left">
				<div className="box_face_color" style={{backgroundColor: "orange"}}></div>
			</div>
			<div className="box_face box_face-right">
				<div className="box_face_color" style={{backgroundColor: "green"}}></div>
			</div>
			<div className="box_face box_face-top">
				<div className="box_face_color" style={{backgroundColor: "red"}}></div>
			</div>
		</div>		<div className='box'>
			<div className="box_face box_face-bottom">
				<div className="box_face_color" style={{backgroundColor: "blue"}}></div>
			</div>
			<div className="box_face box_face-front">
				<div className="box_face_color" style={{backgroundColor: "black"}}></div>
			</div>
			<div className="box_face box_face-back">
				<div className="box_face_color" style={{backgroundColor: "yellow"}}></div>
			</div>
			<div className="box_face box_face-left">
				<div className="box_face_color" style={{backgroundColor: "orange"}}></div>
			</div>
			<div className="box_face box_face-right">
				<div className="box_face_color" style={{backgroundColor: "green"}}></div>
			</div>
			<div className="box_face box_face-top">
				<div className="box_face_color" style={{backgroundColor: "red"}}></div>
			</div>
		</div>		<div className='box'>
			<div className="box_face box_face-bottom">
				<div className="box_face_color" style={{backgroundColor: "blue"}}></div>
			</div>
			<div className="box_face box_face-front">
				<div className="box_face_color" style={{backgroundColor: "black"}}></div>
			</div>
			<div className="box_face box_face-back">
				<div className="box_face_color" style={{backgroundColor: "yellow"}}></div>
			</div>
			<div className="box_face box_face-left">
				<div className="box_face_color" style={{backgroundColor: "orange"}}></div>
			</div>
			<div className="box_face box_face-right">
				<div className="box_face_color" style={{backgroundColor: "green"}}></div>
			</div>
			<div className="box_face box_face-top">
				<div className="box_face_color" style={{backgroundColor: "red"}}></div>
			</div>
		</div>		<div className='box'>
			<div className="box_face box_face-bottom">
				<div className="box_face_color" style={{backgroundColor: "blue"}}></div>
			</div>
			<div className="box_face box_face-front">
				<div className="box_face_color" style={{backgroundColor: "black"}}></div>
			</div>
			<div className="box_face box_face-back">
				<div className="box_face_color" style={{backgroundColor: "yellow"}}></div>
			</div>
			<div className="box_face box_face-left">
				<div className="box_face_color" style={{backgroundColor: "orange"}}></div>
			</div>
			<div className="box_face box_face-right">
				<div className="box_face_color" style={{backgroundColor: "green"}}></div>
			</div>
			<div className="box_face box_face-top">
				<div className="box_face_color" style={{backgroundColor: "red"}}></div>
			</div>
		</div>		<div className='box'>
			<div className="box_face box_face-bottom">
				<div className="box_face_color" style={{backgroundColor: "blue"}}></div>
			</div>
			<div className="box_face box_face-front">
				<div className="box_face_color" style={{backgroundColor: "black"}}></div>
			</div>
			<div className="box_face box_face-back">
				<div className="box_face_color" style={{backgroundColor: "yellow"}}></div>
			</div>
			<div className="box_face box_face-left">
				<div className="box_face_color" style={{backgroundColor: "orange"}}></div>
			</div>
			<div className="box_face box_face-right">
				<div className="box_face_color" style={{backgroundColor: "green"}}></div>
			</div>
			<div className="box_face box_face-top">
				<div className="box_face_color" style={{backgroundColor: "red"}}></div>
			</div>
		</div>
	</div>
  )
}
