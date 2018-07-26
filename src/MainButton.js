import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleRight} from '@fortawesome/free-solid-svg-icons'
const buttonStyle = {
    padding: '12px 24px',
    background: 'white',
    textDecoration: 'none',
    color: '#000',
    textTransform: 'uppercase',
    fontSize: 16,
    fontWeight: 300,
    fontFamily: 'Source Sans Pro, sans-serif',
}
const iconStyle = {
	paddingLeft: 5,
}
 const MainButton = (props) => {
	return (
		<a href={props.url} style={buttonStyle}>
			{props.text}
			<FontAwesomeIcon
			 style={iconStyle} 
			 icon={faAngleRight}
			 />
 		</a>
		)
}

export default MainButton;