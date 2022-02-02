import React from 'react';
import './Title.scss';
import {ReactComponent as Logo} from '../../resources/star-wars-logo.svg';

const Title = () => {
	return (
		<div className="header-title">
			<div className="logo-wrapper">
				<div className="logo">
					<Logo />
				</div>
			</div>
		</div>
	)
}

export default Title;