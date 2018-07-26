import React, {Component} from 'react'
import MainButton from './MainButton'

export default class SquareCard extends React.Component{
	styles={
		container: {	
			width: '400px',
			height: '400px',
			backgroundImage: 'linear-gradient(229deg, #4494a6, #5e8e6f 48%, #72a16b)',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			padding:'14px 37px',
			color: 'white',
			textAlign: 'center',
			fontWeight: 200,
			fontFamily: 'Source Sans Pro, sans-serif',
		},
		half: {
			flex: 1,
			display: 'flex',
			justifyContent:'center',
			alignItems: 'center',
			flexDirection:'column',
		},
		icon:{
			width: 50,
			height: 50,
			borderRadius: 999,
			borderWidth: 2,
			borderColor: 'white',
			borderStyle: 'solid',
			display: 'flex',
		},
		header: {
			flex: 1,
			fontWeight: '300',
			fontSize: 36,
			textAlign: 'center',
		},
		bodyText: {
			padding: 40,
			fontWeight: 500,
			fontSize: 18, 
			flex: 1,
		},
		bottom: {
			justifyContent: 'space-around',
		},
		button: {
			flex: 1,
		}

	}

	render() {
		return(
			<div className={this.props.class} style={this.styles.container}>
				<div style={this.styles.half}>
					<img src={this.props.icon} style={this.styles.icon}/>
					<h1 style={this.styles.header}>{this.props.headerText}</h1>
				</div>
				<div style={{...this.styles.half,...this.styles.bottom}}>
					<span style={this.styles.bodyText}>{this.props.bodyText}</span>
					<div style={this.styles.button}>
						<MainButton 
						text={this.props.buttonText} 
						url={this.props.destinationLink} />
					</div>
				</div>
			</div>
		);
	}
}