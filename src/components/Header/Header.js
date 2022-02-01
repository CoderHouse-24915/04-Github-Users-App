import React from 'react';
import './Header.css';
// Imagen
import img from '../Header/github-logo.png';

const Header = ({ title }) => {
	return (
		<div className='Header'>
			<h1>{title}</h1>
			<img src={img} alt='Logo Github' width='200px' />
		</div>
	);
};

Header.defaultProps = {
	title: 'Github Api App',
};

export default Header;
