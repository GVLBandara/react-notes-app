import React, { useEffect, useState } from 'react';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';

const App = () => {

	const uniqueId = () => parseInt(Date.now() * Math.random(), 10).toString();

	const [notes, setNotes] = useState([
		{
			id: uniqueId(),
			text: 'First note!',
			date: '29/07/2023'
		},
		{
			id: uniqueId(),
			text: 'Second note!',
			date: '29/07/2023'
		},
		{
			id: uniqueId(),
			text: 'Third note!',
			date: '29/07/2023'
		},
		{
			id: uniqueId(),
			text: 'Fourth note!',
			date: '29/07/2023'
		},
		{
			id: uniqueId(),
			text: 'Fifth note!',
			date: '29/07/2023'
		}
	]);

	const [searchText, setSearchText] = useState('');

	const [dMode, setDMode] = useState(false);

	useEffect(() => {
		const loadNotes = JSON.parse(
			localStorage.getItem('react-notes-app')
		);
		const dm = JSON.parse(
			localStorage.getItem('react-notes-app-darkMode')
		);

		if (loadNotes) {
			setNotes(loadNotes);
		}
		if (dm) {
			setDMode(dm);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app',
			JSON.stringify(notes)
		);
		localStorage.setItem(
			'react-notes-app-darkMode',
			JSON.stringify(dMode)
		);
	}, [notes, dMode]);

	const addNote = (text) => {
		const date = new Date().toLocaleDateString('en-GB');
		const newNote = {
			id: uniqueId(),
			text: text,
			date: date
		}
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	}

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	}


	return (
		<div className={`${dMode && 'dark-mode'}`}>
			<div className='container'>
				<Header handleDarkMode={setDMode} />
				<Search handleSearch={setSearchText} />
				<NotesList
					notes={notes.filter((note) => (note.text+note.date).toLowerCase().includes(searchText.toLowerCase()))}
					handleAddNote={addNote}
					handleDeleteNote={deleteNote}
				/>
			</div>
		</div>
	)
};

export default App;