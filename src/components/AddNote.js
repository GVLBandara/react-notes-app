import React, { useState } from 'react'

const AddNote = ({ handleAddNote }) => {
	const [noteText, setNoteText] = useState('');
	const chrLimit = 200;

	const handleChange = (event) => {
		if(event.target.value.length > 200){
			event.target.value = event.target.value.substring(0, 200);
		}
		setNoteText(event.target.value);
	}

	const handleSave = () => {
		if (noteText.trim().length > 0) {
			handleAddNote(noteText);
		}
		document.getElementById('txt').value = '';
		setNoteText('');
	}

	return (
		<div className='note new'>
			<textarea
				id='txt'
				rows='8'
				cols='10'
				placeholder='Type to add note...'
				onChange={handleChange}
			></textarea>
			<div className='note-footer'>
				<small>{chrLimit-noteText.length} Remaining</small>
				<button className='save' onClick={handleSave}>Save</button>
			</div>
		</div>
	)
}

export default AddNote;