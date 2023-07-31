import React from 'react'

const Header = ({ handleDarkMode }) => {

	return (
		<div className='header'>
			<h1>Notes</h1>
			<button
				className='btnMode'
				onClick={() => handleDarkMode((previousDarkMOde) => !previousDarkMOde)}>
				Change Mode
			</button>
		</div>
	)
}

export default Header